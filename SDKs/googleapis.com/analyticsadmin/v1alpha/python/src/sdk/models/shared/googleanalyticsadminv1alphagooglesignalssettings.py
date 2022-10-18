from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsConsentEnum(str, Enum):
    GOOGLE_SIGNALS_CONSENT_UNSPECIFIED = "GOOGLE_SIGNALS_CONSENT_UNSPECIFIED"
    GOOGLE_SIGNALS_CONSENT_CONSENTED = "GOOGLE_SIGNALS_CONSENT_CONSENTED"
    GOOGLE_SIGNALS_CONSENT_NOT_CONSENTED = "GOOGLE_SIGNALS_CONSENT_NOT_CONSENTED"

class GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsStateEnum(str, Enum):
    GOOGLE_SIGNALS_STATE_UNSPECIFIED = "GOOGLE_SIGNALS_STATE_UNSPECIFIED"
    GOOGLE_SIGNALS_ENABLED = "GOOGLE_SIGNALS_ENABLED"
    GOOGLE_SIGNALS_DISABLED = "GOOGLE_SIGNALS_DISABLED"


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaGoogleSignalsSettings:
    consent: Optional[GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsConsentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consent' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
