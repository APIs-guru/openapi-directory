from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight:
    r"""GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight
    The Insight object with configuration that was returned and actual list of records.
    """
    
    applied_config: Optional[GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedConfig') }})
    metadata: Optional[GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rows: Optional[List[GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    
