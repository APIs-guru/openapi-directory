from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import configurationstatus
from . import encryptiontype_enum


@dataclass_json
@dataclass
class DescribeDefaultEncryptionConfigurationResponse:
    configuration_status: configurationstatus.ConfigurationStatus = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurationStatus' }})
    encryption_type: encryptiontype_enum.EncryptionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionType' }})
    kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyArn' }})
    
