from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import monitorings3output


@dataclass_json
@dataclass
class MonitoringOutput:
    s3_output: monitorings3output.MonitoringS3Output = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Output' }})
    
