from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ListAlertPoliciesQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ListAlertPoliciesRequest:
    query_params: ListAlertPoliciesQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ListAlertPolicies200ApplicationJSONLinksPages1:
    last: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    

@dataclass_json
@dataclass
class ListAlertPolicies200ApplicationJSONLinksPages2:
    first: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first' }})
    prev: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prev' }})
    

@dataclass_json
@dataclass
class ListAlertPolicies200ApplicationJSONLinks:
    pages: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    

@dataclass_json
@dataclass
class ListAlertPolicies200ApplicationJSONMeta:
    total: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class ListAlertPolicies200ApplicationJSONPoliciesAlertsSlack:
    channel: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListAlertPolicies200ApplicationJSONPoliciesAlerts:
    email: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    slack: List[ListAlertPolicies200ApplicationJSONPoliciesAlertsSlack] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slack' }})
    
class ListAlertPolicies200ApplicationJSONPoliciesCompareEnum(str, Enum):
    GREATER_THAN = "GreaterThan"
    LESS_THAN = "LessThan"

class ListAlertPolicies200ApplicationJSONPoliciesTypeEnum(str, Enum):
    V1_INSIGHTS_DROPLET_LOAD_1 = "v1/insights/droplet/load_1"
    V1_INSIGHTS_DROPLET_LOAD_5 = "v1/insights/droplet/load_5"
    V1_INSIGHTS_DROPLET_LOAD_15 = "v1/insights/droplet/load_15"
    V1_INSIGHTS_DROPLET_MEMORY_UTILIZATION_PERCENT = "v1/insights/droplet/memory_utilization_percent"
    V1_INSIGHTS_DROPLET_DISK_UTILIZATION_PERCENT = "v1/insights/droplet/disk_utilization_percent"
    V1_INSIGHTS_DROPLET_CPU = "v1/insights/droplet/cpu"
    V1_INSIGHTS_DROPLET_DISK_READ = "v1/insights/droplet/disk_read"
    V1_INSIGHTS_DROPLET_DISK_WRITE = "v1/insights/droplet/disk_write"
    V1_INSIGHTS_DROPLET_PUBLIC_OUTBOUND_BANDWIDTH = "v1/insights/droplet/public_outbound_bandwidth"
    V1_INSIGHTS_DROPLET_PUBLIC_INBOUND_BANDWIDTH = "v1/insights/droplet/public_inbound_bandwidth"
    V1_INSIGHTS_DROPLET_PRIVATE_OUTBOUND_BANDWIDTH = "v1/insights/droplet/private_outbound_bandwidth"
    V1_INSIGHTS_DROPLET_PRIVATE_INBOUND_BANDWIDTH = "v1/insights/droplet/private_inbound_bandwidth"

class ListAlertPolicies200ApplicationJSONPoliciesWindowEnum(str, Enum):
    FIVEM = "5m"
    TENM = "10m"
    THIRTYM = "30m"
    ONEH = "1h"


@dataclass_json
@dataclass
class ListAlertPolicies200ApplicationJSONPolicies:
    alerts: ListAlertPolicies200ApplicationJSONPoliciesAlerts = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alerts' }})
    compare: ListAlertPolicies200ApplicationJSONPoliciesCompareEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compare' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    entities: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entities' }})
    tags: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    type: ListAlertPolicies200ApplicationJSONPoliciesTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uuid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uuid' }})
    value: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    window: ListAlertPolicies200ApplicationJSONPoliciesWindowEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'window' }})
    

@dataclass_json
@dataclass
class ListAlertPolicies200ApplicationJSON:
    links: Optional[ListAlertPolicies200ApplicationJSONLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    meta: ListAlertPolicies200ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    policies: List[ListAlertPolicies200ApplicationJSONPolicies] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policies' }})
    

@dataclass_json
@dataclass
class ListAlertPolicies401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class ListAlertPoliciesResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    list_alert_policies_200_application_json_object: Optional[ListAlertPolicies200ApplicationJSON] = field(default=None)
    list_alert_policies_401_application_json_object: Optional[ListAlertPolicies401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
