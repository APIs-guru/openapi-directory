from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateAlertPolicyPathParams:
    alert_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'alert_uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAlertPolicyRequest:
    path_params: UpdateAlertPolicyPathParams = field(default=None)
    request: shared.Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchema = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class UpdateAlertPolicy401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class UpdateAlertPolicyResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    update_alert_policy_401_application_json_object: Optional[UpdateAlertPolicy401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    onev2_1monitoring_1alerts_get_responses_200_content_application_1json_schema_all_of_0_properties_policies_items: Optional[shared.Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems] = field(default=None)
    
