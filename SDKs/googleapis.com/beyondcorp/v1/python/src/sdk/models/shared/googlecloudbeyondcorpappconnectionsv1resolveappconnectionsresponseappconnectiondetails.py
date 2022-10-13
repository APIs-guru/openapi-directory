from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudbeyondcorpappconnectionsv1appconnection


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponseAppConnectionDetails:
    app_connection: Optional[googlecloudbeyondcorpappconnectionsv1appconnection.GoogleCloudBeyondcorpAppconnectionsV1AppConnection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appConnection' }})
    recent_mig_vms: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recentMigVms' }})
    
