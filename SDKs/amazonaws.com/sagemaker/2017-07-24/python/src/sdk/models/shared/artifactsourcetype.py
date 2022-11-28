from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ArtifactSourceType:
    r"""ArtifactSourceType
    The ID and ID type of an artifact source.
    """
    
    source_id_type: ArtifactSourceIDTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceIdType') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
