from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ImportAptArtifactsGcsSource:
    r"""ImportAptArtifactsGcsSource
    Google Cloud Storage location where the artifacts currently reside.
    """
    
    uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uris') }})
    use_wildcards: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useWildcards') }})
    
