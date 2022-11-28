from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1TLSInfo:
    r"""GoogleCloudApigeeV1TLSInfo
    TLS configuration information for virtual hosts and TargetServers.
    """
    
    ciphers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ciphers') }})
    client_auth_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientAuthEnabled') }})
    common_name: Optional[GoogleCloudApigeeV1TLSInfoCommonName] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commonName') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    ignore_validation_errors: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreValidationErrors') }})
    key_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyAlias') }})
    key_store: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyStore') }})
    protocols: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocols') }})
    trust_store: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trustStore') }})
    
