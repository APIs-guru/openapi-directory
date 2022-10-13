from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import studioencryptionconfigurationkeytype_enum


@dataclass_json
@dataclass
class StudioEncryptionConfiguration:
    key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyArn' }})
    key_type: studioencryptionconfigurationkeytype_enum.StudioEncryptionConfigurationKeyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyType' }})
    
