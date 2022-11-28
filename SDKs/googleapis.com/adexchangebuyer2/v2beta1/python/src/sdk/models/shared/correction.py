from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CorrectionTypeEnum(str, Enum):
    CORRECTION_TYPE_UNSPECIFIED = "CORRECTION_TYPE_UNSPECIFIED"
    VENDOR_IDS_ADDED = "VENDOR_IDS_ADDED"
    SSL_ATTRIBUTE_REMOVED = "SSL_ATTRIBUTE_REMOVED"
    FLASH_FREE_ATTRIBUTE_REMOVED = "FLASH_FREE_ATTRIBUTE_REMOVED"
    FLASH_FREE_ATTRIBUTE_ADDED = "FLASH_FREE_ATTRIBUTE_ADDED"
    REQUIRED_ATTRIBUTE_ADDED = "REQUIRED_ATTRIBUTE_ADDED"
    REQUIRED_VENDOR_ADDED = "REQUIRED_VENDOR_ADDED"
    SSL_ATTRIBUTE_ADDED = "SSL_ATTRIBUTE_ADDED"
    IN_BANNER_VIDEO_ATTRIBUTE_ADDED = "IN_BANNER_VIDEO_ATTRIBUTE_ADDED"
    MRAID_ATTRIBUTE_ADDED = "MRAID_ATTRIBUTE_ADDED"
    FLASH_ATTRIBUTE_REMOVED = "FLASH_ATTRIBUTE_REMOVED"
    VIDEO_IN_SNIPPET_ATTRIBUTE_ADDED = "VIDEO_IN_SNIPPET_ATTRIBUTE_ADDED"


@dataclass_json
@dataclass
class Correction:
    r"""Correction
    Output only. Shows any corrections that were applied to this creative.
    """
    
    contexts: Optional[List[ServingContext]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contexts') }})
    details: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    type: Optional[CorrectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
