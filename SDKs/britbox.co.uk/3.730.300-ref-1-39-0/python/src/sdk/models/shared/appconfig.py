from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import classification
from . import appconfigdisplay
from . import appconfiggeneral
from . import appconfigi18n
from . import appconfiglinear
from . import navigation
from . import appconfigplayback
from . import pagesummary
from . import appconfigsubscription


@dataclass_json
@dataclass
class AppConfig:
    classification: Optional[dict[str, classification.Classification]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classification' }})
    display: Optional[appconfigdisplay.AppConfigDisplay] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display' }})
    general: Optional[appconfiggeneral.AppConfigGeneral] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'general' }})
    i18n: Optional[appconfigi18n.AppConfigI18n] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'i18n' }})
    linear: Optional[appconfiglinear.AppConfigLinear] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linear' }})
    navigation: Optional[navigation.Navigation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'navigation' }})
    playback: Optional[appconfigplayback.AppConfigPlayback] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playback' }})
    sitemap: Optional[List[pagesummary.PageSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sitemap' }})
    subscription: Optional[appconfigsubscription.AppConfigSubscription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscription' }})
    
