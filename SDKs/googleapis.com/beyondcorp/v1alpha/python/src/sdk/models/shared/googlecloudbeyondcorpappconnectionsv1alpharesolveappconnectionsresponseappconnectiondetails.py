from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudbeyondcorpappconnectionsv1alphaappconnection


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponseAppConnectionDetails:
    app_connection: Optional[googlecloudbeyondcorpappconnectionsv1alphaappconnection.GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appConnection' }})
    recent_mig_vms: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recentMigVms' }})
    
