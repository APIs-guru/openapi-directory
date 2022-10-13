from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import inputprocessingconfiguration
from . import inputstartingpositionconfiguration
from . import s3configuration


@dataclass_json
@dataclass
class DiscoverInputSchemaRequest:
    input_processing_configuration: Optional[inputprocessingconfiguration.InputProcessingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputProcessingConfiguration' }})
    input_starting_position_configuration: Optional[inputstartingpositionconfiguration.InputStartingPositionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputStartingPositionConfiguration' }})
    resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceARN' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleARN' }})
    s3_configuration: Optional[s3configuration.S3Configuration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Configuration' }})
    
