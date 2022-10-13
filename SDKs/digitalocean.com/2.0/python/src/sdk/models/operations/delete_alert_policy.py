from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteAlertPolicyPathParams:
    alert_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'alert_uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAlertPolicyRequest:
    path_params: DeleteAlertPolicyPathParams = field(default=None)
    

@dataclass_json
@dataclass
class DeleteAlertPolicy401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class DeleteAlertPolicyResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    delete_alert_policy_401_application_json_object: Optional[DeleteAlertPolicy401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
