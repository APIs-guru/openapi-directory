from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1attribute
from . import googlecloudapigeev1credential


@dataclass_json
@dataclass
class GoogleCloudApigeeV1DeveloperApp:
    api_products: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiProducts' }})
    app_family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appFamily' }})
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appId' }})
    attributes: Optional[List[googlecloudapigeev1attribute.GoogleCloudApigeeV1Attribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    callback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'callbackUrl' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt' }})
    credentials: Optional[List[googlecloudapigeev1credential.GoogleCloudApigeeV1Credential]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credentials' }})
    developer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'developerId' }})
    key_expires_in: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyExpiresIn' }})
    last_modified_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedAt' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopes' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
