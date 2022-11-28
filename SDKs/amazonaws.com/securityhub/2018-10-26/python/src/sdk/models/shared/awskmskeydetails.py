from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsKmsKeyDetails:
    r"""AwsKmsKeyDetails
    Contains metadata about an KMS key.
    """
    
    aws_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AWSAccountId') }})
    creation_date: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    key_manager: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyManager') }})
    key_rotation_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyRotationStatus') }})
    key_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyState') }})
    origin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Origin') }})
    
