from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ServiceAccountKeyTypeEnum(str, Enum):
    GOOGLE_CREDENTIALS = "googleCredentials"
    PKCS12 = "pkcs12"


@dataclass_json
@dataclass
class ServiceAccountKey:
    r"""ServiceAccountKey
    Credentials that can be used to authenticate as a service account.
    """
    
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    public_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicData') }})
    type: Optional[ServiceAccountKeyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
