from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awsapigatewayendpointconfiguration


@dataclass_json
@dataclass
class AwsAPIGatewayRestAPIDetails:
    api_key_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApiKeySource' }})
    binary_media_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BinaryMediaTypes' }})
    created_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedDate' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    endpoint_configuration: Optional[awsapigatewayendpointconfiguration.AwsAPIGatewayEndpointConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointConfiguration' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    minimum_compression_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumCompressionSize' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
