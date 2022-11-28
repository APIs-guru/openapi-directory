from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeDefaultEncryptionConfigurationResponse:
    configuration_status: ConfigurationStatus = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationStatus') }})
    encryption_type: EncryptionTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionType') }})
    kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyArn') }})
    
