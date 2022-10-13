from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateDatabaseFirewallPathParams:
    database_cluster_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'database_cluster_uuid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateDatabaseFirewallRequestBody:
    rules: Optional[List[shared.Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    

@dataclass
class UpdateDatabaseFirewallRequest:
    path_params: UpdateDatabaseFirewallPathParams = field(default=None)
    request: UpdateDatabaseFirewallRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class UpdateDatabaseFirewall401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class UpdateDatabaseFirewallResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    update_database_firewall_401_application_json_object: Optional[UpdateDatabaseFirewall401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
