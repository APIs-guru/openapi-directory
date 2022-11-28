from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1Credential:
    api_products: Optional[List[GoogleCloudApigeeV1APIProductRef]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiProducts') }})
    attributes: Optional[List[GoogleCloudApigeeV1Attribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    consumer_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerKey') }})
    consumer_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerSecret') }})
    expires_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiresAt') }})
    issued_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuedAt') }})
    scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
