from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import scripttype_enum
from . import source


@dataclass_json
@dataclass
class SsmValidationParameters:
    command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    execution_timeout_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionTimeoutSeconds' }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceId' }})
    output_s3_bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputS3BucketName' }})
    script_type: Optional[scripttype_enum.ScriptTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scriptType' }})
    source: Optional[source.Source] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
