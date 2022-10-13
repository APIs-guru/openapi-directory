from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import destination_enum
from . import logtype_enum


@dataclass_json
@dataclass
class LogSettingsRequest:
    destination: destination_enum.DestinationEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyArn' }})
    log_type: logtype_enum.LogTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logType' }})
    resource_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceArn' }})
    
