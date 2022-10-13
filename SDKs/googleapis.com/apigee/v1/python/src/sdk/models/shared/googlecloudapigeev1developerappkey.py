from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1attribute


@dataclass_json
@dataclass
class GoogleCloudApigeeV1DeveloperAppKey:
    api_products: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiProducts' }})
    attributes: Optional[List[googlecloudapigeev1attribute.GoogleCloudApigeeV1Attribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    consumer_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumerKey' }})
    consumer_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumerSecret' }})
    expires_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiresAt' }})
    expires_in_seconds: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiresInSeconds' }})
    issued_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuedAt' }})
    scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopes' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
