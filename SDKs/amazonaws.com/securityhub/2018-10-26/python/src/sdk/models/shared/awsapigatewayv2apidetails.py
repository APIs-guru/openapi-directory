from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awscorsconfiguration


@dataclass_json
@dataclass
class AwsAPIGatewayV2APIDetails:
    api_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApiEndpoint' }})
    api_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApiId' }})
    api_key_selection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApiKeySelectionExpression' }})
    cors_configuration: Optional[awscorsconfiguration.AwsCorsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CorsConfiguration' }})
    created_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedDate' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    protocol_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProtocolType' }})
    route_selection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RouteSelectionExpression' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
