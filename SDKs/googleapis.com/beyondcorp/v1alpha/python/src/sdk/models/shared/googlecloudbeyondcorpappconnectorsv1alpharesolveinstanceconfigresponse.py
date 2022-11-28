from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpAppconnectorsV1alphaResolveInstanceConfigResponse:
    r"""GoogleCloudBeyondcorpAppconnectorsV1alphaResolveInstanceConfigResponse
    Response message for BeyondCorp.ResolveInstanceConfig.
    """
    
    instance_config: Optional[GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInstanceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceConfig') }})
    
