from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ChannelSpecification:
    r"""ChannelSpecification
    Defines a named input source, called a channel, to be used by an algorithm.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    supported_content_types: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportedContentTypes') }})
    supported_input_modes: List[TrainingInputModeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportedInputModes') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    is_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsRequired') }})
    supported_compression_types: Optional[List[CompressionTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportedCompressionTypes') }})
    
