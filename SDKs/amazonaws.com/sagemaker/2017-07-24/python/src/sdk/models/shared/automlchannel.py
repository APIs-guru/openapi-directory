from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AutoMlChannel:
    r"""AutoMlChannel
    A channel is a named input source that training algorithms can consume. For more information, see .
    """
    
    data_source: AutoMlDataSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSource') }})
    target_attribute_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetAttributeName') }})
    compression_type: Optional[CompressionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompressionType') }})
    
