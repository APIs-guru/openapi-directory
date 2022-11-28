from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ObjectCountByEncryptionType:
    r"""ObjectCountByEncryptionType
    Provides information about the number of objects that are in an S3 bucket and use certain types of server-side encryption, use client-side encryption, or aren't encrypted.
    """
    
    customer_managed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerManaged') }})
    kms_managed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsManaged') }})
    s3_managed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Managed') }})
    unencrypted: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unencrypted') }})
    unknown: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unknown') }})
    
