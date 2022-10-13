from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetDestroyWithAssociatedResourcesStatusPathParams:
    droplet_id: int = field(default=None, metadata={'path_param': { 'field_name': 'droplet_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDestroyWithAssociatedResourcesStatusRequest:
    path_params: GetDestroyWithAssociatedResourcesStatusPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetDestroyWithAssociatedResourcesStatus200ApplicationJSONDroplet:
    destroyed_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destroyed_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_message' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class GetDestroyWithAssociatedResourcesStatus200ApplicationJSONResources:
    snapshots: Optional[List[shared.Onev21droplets1Percent7BdropletIDPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snapshots' }})
    volume_snapshots: Optional[List[shared.Onev21droplets1Percent7BdropletIDPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volume_snapshots' }})
    volumes: Optional[List[shared.Onev21droplets1Percent7BdropletIDPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumes' }})
    

@dataclass_json
@dataclass
class GetDestroyWithAssociatedResourcesStatus200ApplicationJSON:
    completed_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completed_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    droplet: Optional[GetDestroyWithAssociatedResourcesStatus200ApplicationJSONDroplet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'droplet' }})
    failures: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failures' }})
    resources: Optional[GetDestroyWithAssociatedResourcesStatus200ApplicationJSONResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    

@dataclass_json
@dataclass
class GetDestroyWithAssociatedResourcesStatus401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class GetDestroyWithAssociatedResourcesStatusResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_destroy_with_associated_resources_status_200_application_json_object: Optional[GetDestroyWithAssociatedResourcesStatus200ApplicationJSON] = field(default=None)
    get_destroy_with_associated_resources_status_401_application_json_object: Optional[GetDestroyWithAssociatedResourcesStatus401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
