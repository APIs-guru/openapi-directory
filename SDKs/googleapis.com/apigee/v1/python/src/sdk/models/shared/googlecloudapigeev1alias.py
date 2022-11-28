from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudApigeeV1AliasTypeEnum(str, Enum):
    ALIAS_TYPE_UNSPECIFIED = "ALIAS_TYPE_UNSPECIFIED"
    CERT = "CERT"
    KEY_CERT = "KEY_CERT"


@dataclass_json
@dataclass
class GoogleCloudApigeeV1Alias:
    r"""GoogleCloudApigeeV1Alias
    Reference to a certificate or key/certificate pair.
    """
    
    alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alias') }})
    certs_info: Optional[GoogleCloudApigeeV1Certificate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certsInfo') }})
    type: Optional[GoogleCloudApigeeV1AliasTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
