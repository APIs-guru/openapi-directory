from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import ingestions3inputconfiguration


@dataclass_json
@dataclass
class IngestionInputConfiguration:
    s3_input_configuration: ingestions3inputconfiguration.IngestionS3InputConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3InputConfiguration' }})
    
