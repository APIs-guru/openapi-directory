from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudbeyondcorpappconnectorsv1alphaappconnector


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpAppconnectorsV1alphaListAppConnectorsResponse:
    app_connectors: Optional[List[googlecloudbeyondcorpappconnectorsv1alphaappconnector.GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appConnectors' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
