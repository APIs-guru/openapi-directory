from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudbeyondcorpappconnectorsv1appconnectorprincipalinfoserviceaccount


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo:
    service_account: Optional[googlecloudbeyondcorpappconnectorsv1appconnectorprincipalinfoserviceaccount.GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfoServiceAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    
