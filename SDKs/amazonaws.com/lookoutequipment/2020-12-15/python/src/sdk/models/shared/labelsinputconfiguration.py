from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import labelss3inputconfiguration


@dataclass_json
@dataclass
class LabelsInputConfiguration:
    s3_input_configuration: labelss3inputconfiguration.LabelsS3InputConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3InputConfiguration' }})
    
