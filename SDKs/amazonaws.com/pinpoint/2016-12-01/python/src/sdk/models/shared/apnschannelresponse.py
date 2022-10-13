from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ApnsChannelResponse:
    application_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationId' }})
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate' }})
    default_authentication_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultAuthenticationMethod' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    has_credential: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HasCredential' }})
    has_token_key: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HasTokenKey' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    is_archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsArchived' }})
    last_modified_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedBy' }})
    last_modified_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedDate' }})
    platform: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Platform' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
