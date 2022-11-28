from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow:
    r"""GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow
    Row of the fetch response consisting of a set of entries.
    """
    
    field_values: Optional[List[GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRowFieldVal]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldValues') }})
    
