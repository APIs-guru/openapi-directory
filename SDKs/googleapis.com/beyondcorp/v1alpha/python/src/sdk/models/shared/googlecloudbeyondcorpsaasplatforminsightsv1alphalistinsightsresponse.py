from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaListInsightsResponse:
    r"""GoogleCloudBeyondcorpSaasplatformInsightsV1alphaListInsightsResponse
    The response for the list of insights.
    """
    
    insights: Optional[List[GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insights') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
