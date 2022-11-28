from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse:
    r"""GoogleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse
    The response for the configured insight.
    """
    
    applied_config: Optional[GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedConfig') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    rows: Optional[List[GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    
