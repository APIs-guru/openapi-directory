from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import compressiontype_enum
from . import traininginputmode_enum


@dataclass_json
@dataclass
class ChannelSpecification:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    is_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsRequired' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    supported_compression_types: Optional[List[compressiontype_enum.CompressionTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportedCompressionTypes' }})
    supported_content_types: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportedContentTypes' }})
    supported_input_modes: List[traininginputmode_enum.TrainingInputModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportedInputModes' }})
    
