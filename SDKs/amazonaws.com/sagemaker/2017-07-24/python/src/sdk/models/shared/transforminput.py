from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TransformInput:
    r"""TransformInput
    Describes the input source of a transform job and the way the transform job consumes it.
    """
    
    data_source: TransformDataSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSource') }})
    compression_type: Optional[CompressionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompressionType') }})
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentType') }})
    split_type: Optional[SplitTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SplitType') }})
    
