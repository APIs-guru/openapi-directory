from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudbeyondcorpappconnectorsv1alphaappconnectorprincipalinfoserviceaccount


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorPrincipalInfo:
    service_account: Optional[googlecloudbeyondcorpappconnectorsv1alphaappconnectorprincipalinfoserviceaccount.GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorPrincipalInfoServiceAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    
