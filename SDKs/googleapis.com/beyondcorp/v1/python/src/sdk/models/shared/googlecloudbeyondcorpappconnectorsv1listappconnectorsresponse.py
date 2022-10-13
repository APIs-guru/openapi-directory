from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudbeyondcorpappconnectorsv1appconnector


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse:
    app_connectors: Optional[List[googlecloudbeyondcorpappconnectorsv1appconnector.GoogleCloudBeyondcorpAppconnectorsV1AppConnector]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appConnectors' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
