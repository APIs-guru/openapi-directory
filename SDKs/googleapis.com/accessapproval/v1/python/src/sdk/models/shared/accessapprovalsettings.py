from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import enrolledservice


@dataclass_json
@dataclass
class AccessApprovalSettings:
    active_key_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeKeyVersion' }})
    ancestor_has_active_key_version: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ancestorHasActiveKeyVersion' }})
    enrolled_ancestor: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enrolledAncestor' }})
    enrolled_services: Optional[List[enrolledservice.EnrolledService]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enrolledServices' }})
    invalid_key_version: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invalidKeyVersion' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notification_emails: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationEmails' }})
    
