from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudbeyondcorpsaasplatforminsightsv1alphaappliedconfig
from . import googlecloudbeyondcorpsaasplatforminsightsv1alpharow


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse:
    applied_config: Optional[googlecloudbeyondcorpsaasplatforminsightsv1alphaappliedconfig.GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appliedConfig' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    rows: Optional[List[googlecloudbeyondcorpsaasplatforminsightsv1alpharow.GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    
