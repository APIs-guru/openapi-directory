from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import servingcontext

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
    contexts: Optional[List[servingcontext.ServingContext]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contexts' }})
    details: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    type: Optional[CorrectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
