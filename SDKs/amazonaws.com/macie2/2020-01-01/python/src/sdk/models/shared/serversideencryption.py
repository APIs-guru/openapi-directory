from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServerSideEncryption:
    r"""ServerSideEncryption
    Provides information about the server-side encryption settings for an S3 bucket or S3 object.
    """
    
    encryption_type: Optional[EncryptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionType') }})
    kms_master_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsMasterKeyId') }})
    
