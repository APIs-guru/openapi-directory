from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphameasurementprotocolsecret


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse:
    measurement_protocol_secrets: Optional[List[googleanalyticsadminv1alphameasurementprotocolsecret.GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'measurementProtocolSecrets' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
