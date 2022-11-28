from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReplicaRegionType:
    r"""ReplicaRegionType
    (Optional) Custom type consisting of a <code>Region</code> (required) and the <code>KmsKeyId</code> which can be an <code>ARN</code>, <code>Key ID</code>, or <code>Alias</code>.
    """
    
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Region') }})
    
