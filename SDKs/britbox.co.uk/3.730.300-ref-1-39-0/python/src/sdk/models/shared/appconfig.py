from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AppConfig:
    classification: Optional[dict[str, Classification]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification') }})
    display: Optional[AppConfigDisplay] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display') }})
    general: Optional[AppConfigGeneral] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('general') }})
    i18n: Optional[AppConfigI18n] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('i18n') }})
    linear: Optional[AppConfigLinear] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linear') }})
    navigation: Optional[Navigation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('navigation') }})
    playback: Optional[AppConfigPlayback] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playback') }})
    sitemap: Optional[List[PageSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sitemap') }})
    subscription: Optional[AppConfigSubscription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription') }})
    
