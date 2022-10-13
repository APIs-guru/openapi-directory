from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudbeyondcorpappconnectionsv1alphaappconnection


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpAppconnectionsV1alphaListAppConnectionsResponse:
    app_connections: Optional[List[googlecloudbeyondcorpappconnectionsv1alphaappconnection.GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appConnections' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
