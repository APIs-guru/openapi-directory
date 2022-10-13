from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudbeyondcorpappconnectionsv1resolveappconnectionsresponseappconnectiondetails


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponse:
    app_connection_details: Optional[List[googlecloudbeyondcorpappconnectionsv1resolveappconnectionsresponseappconnectiondetails.GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponseAppConnectionDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appConnectionDetails' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
