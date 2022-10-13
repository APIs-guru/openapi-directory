from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1attribute


@dataclass_json
@dataclass
class GoogleCloudApigeeV1Developer:
    access_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessType' }})
    app_family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appFamily' }})
    apps: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apps' }})
    attributes: Optional[List[googlecloudapigeev1attribute.GoogleCloudApigeeV1Attribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    companies: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companies' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt' }})
    developer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'developerId' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    last_modified_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedAt' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    organization_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizationName' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userName' }})
    
