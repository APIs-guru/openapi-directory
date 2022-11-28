from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AdUnitContentAdsSettingsBackupOption:
    r"""AdUnitContentAdsSettingsBackupOption
    The backup option to be used in instances where no ad is available.
    """
    
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class AdUnitContentAdsSettings:
    r"""AdUnitContentAdsSettings
    Settings specific to content ads (AFC) and highend mobile content ads (AFMC - deprecated).
    """
    
    backup_option: Optional[AdUnitContentAdsSettingsBackupOption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backupOption') }})
    size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class AdUnitMobileContentAdsSettings:
    r"""AdUnitMobileContentAdsSettings
    Settings specific to WAP mobile content ads (AFMC - deprecated).
    """
    
    markup_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('markupLanguage') }})
    scripting_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scriptingLanguage') }})
    size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class AdUnit:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    content_ads_settings: Optional[AdUnitContentAdsSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentAdsSettings') }})
    custom_style: Optional[AdStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customStyle') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    mobile_content_ads_settings: Optional[AdUnitMobileContentAdsSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileContentAdsSettings') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
