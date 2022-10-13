from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1apiproductref
from . import googlecloudapigeev1attribute


@dataclass_json
@dataclass
class GoogleCloudApigeeV1Credential:
    api_products: Optional[List[googlecloudapigeev1apiproductref.GoogleCloudApigeeV1APIProductRef]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiProducts' }})
    attributes: Optional[List[googlecloudapigeev1attribute.GoogleCloudApigeeV1Attribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    consumer_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumerKey' }})
    consumer_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumerSecret' }})
    expires_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiresAt' }})
    issued_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuedAt' }})
    scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopes' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
