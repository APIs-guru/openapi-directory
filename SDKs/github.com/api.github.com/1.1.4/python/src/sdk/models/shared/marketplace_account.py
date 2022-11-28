from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MarketplaceAccount:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    login: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    organization_billing_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization_billing_email') }})
    
