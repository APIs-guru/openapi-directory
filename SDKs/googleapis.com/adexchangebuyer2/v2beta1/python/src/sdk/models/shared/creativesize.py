from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import size
from . import size

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
    allowed_formats: Optional[List[CreativeSizeAllowedFormatsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedFormats' }})
    companion_sizes: Optional[List[size.Size]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companionSizes' }})
    creative_size_type: Optional[CreativeSizeCreativeSizeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeSizeType' }})
    native_template: Optional[CreativeSizeNativeTemplateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nativeTemplate' }})
    size: Optional[size.Size] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    skippable_ad_type: Optional[CreativeSizeSkippableAdTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skippableAdType' }})
    
