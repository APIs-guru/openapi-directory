from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetAvailableUpgradesPathParams:
    cluster_id: str = field(default=None, metadata={'path_param': { 'field_name': 'cluster_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAvailableUpgradesRequest:
    path_params: GetAvailableUpgradesPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetAvailableUpgrades200ApplicationJSONAvailableUpgradeVersions:
    kubernetes_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kubernetes_version' }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    

@dataclass_json
@dataclass
class GetAvailableUpgrades200ApplicationJSON:
    available_upgrade_versions: Optional[List[GetAvailableUpgrades200ApplicationJSONAvailableUpgradeVersions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available_upgrade_versions' }})
    

@dataclass_json
@dataclass
class GetAvailableUpgrades401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class GetAvailableUpgradesResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_available_upgrades_200_application_json_object: Optional[GetAvailableUpgrades200ApplicationJSON] = field(default=None)
    get_available_upgrades_401_application_json_object: Optional[GetAvailableUpgrades401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
