from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import fieldtomatch


@dataclass_json
@dataclass
class LoggingConfiguration:
    log_destination_configs: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogDestinationConfigs' }})
    redacted_fields: Optional[List[fieldtomatch.FieldToMatch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RedactedFields' }})
    resource_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceArn' }})
    
