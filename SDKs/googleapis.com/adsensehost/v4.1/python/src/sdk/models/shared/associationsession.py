from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AssociationSession:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    product_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productCodes' }})
    redirect_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirectUrl' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    user_locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userLocale' }})
    website_locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'websiteLocale' }})
    website_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'websiteUrl' }})
    
