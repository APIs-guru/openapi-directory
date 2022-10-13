from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import inputprocessingconfigurationdescription


@dataclass_json
@dataclass
class AddApplicationInputProcessingConfigurationResponse:
    application_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationARN' }})
    application_version_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationVersionId' }})
    input_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputId' }})
    input_processing_configuration_description: Optional[inputprocessingconfigurationdescription.InputProcessingConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputProcessingConfigurationDescription' }})
    
