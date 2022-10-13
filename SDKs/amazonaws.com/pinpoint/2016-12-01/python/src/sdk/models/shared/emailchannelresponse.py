from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EmailChannelResponse:
    application_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationId' }})
    configuration_set: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationSet' }})
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    from_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FromAddress' }})
    has_credential: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HasCredential' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    identity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identity' }})
    is_archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsArchived' }})
    last_modified_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedBy' }})
    last_modified_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedDate' }})
    messages_per_second: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MessagesPerSecond' }})
    platform: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Platform' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
