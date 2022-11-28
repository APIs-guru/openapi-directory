from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ConnectorsPlatformConfigInput:
    r"""GoogleCloudApigeeV1ConnectorsPlatformConfigInput
    Configuration for the Connectors Platform add-on.
    """
    
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    
