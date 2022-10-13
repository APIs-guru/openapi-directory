from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudbeyondcorpnetconnectionsv1alphanetconnection


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpNetconnectionsV1alphaListNetConnectionsResponse:
    net_connections: Optional[List[googlecloudbeyondcorpnetconnectionsv1alphanetconnection.GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'netConnections' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
