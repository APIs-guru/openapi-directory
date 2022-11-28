from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo:
    r"""GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo
    PrincipalInfo represents an Identity oneof.
    """
    
    service_account: Optional[GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfoServiceAccount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    
