from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudbeyondcorpsaasplatforminsightsv1alphainsight


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaListInsightsResponse:
    insights: Optional[List[googlecloudbeyondcorpsaasplatforminsightsv1alphainsight.GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insights' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
