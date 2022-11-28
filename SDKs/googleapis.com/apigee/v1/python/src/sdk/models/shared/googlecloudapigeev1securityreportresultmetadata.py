from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudApigeeV1SecurityReportResultMetadata:
    r"""GoogleCloudApigeeV1SecurityReportResultMetadata
    Contains informations about the security report results.
    """
    
    expires: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires') }})
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
