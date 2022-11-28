from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse:
    r"""GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse
    Response message for ListMeasurementProtocolSecret RPC
    """
    
    measurement_protocol_secrets: Optional[List[GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measurementProtocolSecrets') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
