from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAuditUserLink:
    direct_roles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directRoles' }})
    effective_roles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectiveRoles' }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailAddress' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
