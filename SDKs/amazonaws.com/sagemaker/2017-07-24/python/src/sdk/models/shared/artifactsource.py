from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ArtifactSource:
    r"""ArtifactSource
    A structure describing the source of an artifact.
    """
    
    source_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceUri') }})
    source_types: Optional[List[ArtifactSourceType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceTypes') }})
    
