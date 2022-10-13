from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SmsChannelResponse:
    application_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationId' }})
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    has_credential: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HasCredential' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    is_archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsArchived' }})
    last_modified_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedBy' }})
    last_modified_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedDate' }})
    platform: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Platform' }})
    promotional_messages_per_second: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PromotionalMessagesPerSecond' }})
    sender_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SenderId' }})
    short_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShortCode' }})
    transactional_messages_per_second: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransactionalMessagesPerSecond' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
