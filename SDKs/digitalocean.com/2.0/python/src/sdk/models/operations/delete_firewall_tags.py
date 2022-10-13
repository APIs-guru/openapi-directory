from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteFirewallTagsPathParams:
    firewall_id: str = field(default=None, metadata={'path_param': { 'field_name': 'firewall_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFirewallTagsRequest:
    path_params: DeleteFirewallTagsPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class DeleteFirewallTags401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class DeleteFirewallTagsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    delete_firewall_tags_401_application_json_object: Optional[DeleteFirewallTags401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
