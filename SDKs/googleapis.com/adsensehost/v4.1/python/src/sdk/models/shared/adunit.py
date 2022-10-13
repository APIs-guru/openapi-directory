from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import adstyle


@dataclass_json
@dataclass
class AdUnitContentAdsSettingsBackupOption:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class AdUnitContentAdsSettings:
    backup_option: Optional[AdUnitContentAdsSettingsBackupOption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backupOption' }})
    size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class AdUnitMobileContentAdsSettings:
    markup_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'markupLanguage' }})
    scripting_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scriptingLanguage' }})
    size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class AdUnit:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    content_ads_settings: Optional[AdUnitContentAdsSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentAdsSettings' }})
    custom_style: Optional[adstyle.AdStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customStyle' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    mobile_content_ads_settings: Optional[AdUnitMobileContentAdsSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobileContentAdsSettings' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
