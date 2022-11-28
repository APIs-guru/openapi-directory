from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CreativeSizeAllowedFormatsEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    AUDIO = "AUDIO"

class CreativeSizeCreativeSizeTypeEnum(str, Enum):
    CREATIVE_SIZE_TYPE_UNSPECIFIED = "CREATIVE_SIZE_TYPE_UNSPECIFIED"
    REGULAR = "REGULAR"
    INTERSTITIAL = "INTERSTITIAL"
    VIDEO = "VIDEO"
    NATIVE = "NATIVE"

class CreativeSizeNativeTemplateEnum(str, Enum):
    UNKNOWN_NATIVE_TEMPLATE = "UNKNOWN_NATIVE_TEMPLATE"
    NATIVE_CONTENT_AD = "NATIVE_CONTENT_AD"
    NATIVE_APP_INSTALL_AD = "NATIVE_APP_INSTALL_AD"
    NATIVE_VIDEO_CONTENT_AD = "NATIVE_VIDEO_CONTENT_AD"
    NATIVE_VIDEO_APP_INSTALL_AD = "NATIVE_VIDEO_APP_INSTALL_AD"

class CreativeSizeSkippableAdTypeEnum(str, Enum):
    SKIPPABLE_AD_TYPE_UNSPECIFIED = "SKIPPABLE_AD_TYPE_UNSPECIFIED"
    GENERIC = "GENERIC"
    INSTREAM_SELECT = "INSTREAM_SELECT"
    NOT_SKIPPABLE = "NOT_SKIPPABLE"


@dataclass_json
@dataclass
class CreativeSize:
    r"""CreativeSize
    Specifies the size of the creative.
    """
    
    allowed_formats: Optional[List[CreativeSizeAllowedFormatsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedFormats') }})
    companion_sizes: Optional[List[Size]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companionSizes') }})
    creative_size_type: Optional[CreativeSizeCreativeSizeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeSizeType') }})
    native_template: Optional[CreativeSizeNativeTemplateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nativeTemplate') }})
    size: Optional[Size] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    skippable_ad_type: Optional[CreativeSizeSkippableAdTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skippableAdType') }})
    
