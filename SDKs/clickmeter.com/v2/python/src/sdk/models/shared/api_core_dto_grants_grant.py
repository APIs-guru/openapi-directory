from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import api_core_responses_entityuri_system_int64_


@dataclass_json
@dataclass
class APICoreDtoGrantsGrant:
    datapoint_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatapointType' }, 'form': { 'field_name': 'DatapointType' }})
    entity: Optional[api_core_responses_entityuri_system_int64_.APICoreResponsesEntityURISystemInt64] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entity' }, 'form': { 'field_name': 'Entity' }})
    entity_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntityName' }, 'form': { 'field_name': 'EntityName' }})
    entity_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntityType' }, 'form': { 'field_name': 'EntityType' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }, 'form': { 'field_name': 'Type' }})
    
