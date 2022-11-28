from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SegmentTypeInfo:
    r"""SegmentTypeInfo
    Information about the type of a segment requested in a call to <a>StartSegmentDetection</a>. An array of <code>SegmentTypeInfo</code> objects is returned by the response from <a>GetSegmentDetection</a>.
    """
    
    model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelVersion') }})
    type: Optional[SegmentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
