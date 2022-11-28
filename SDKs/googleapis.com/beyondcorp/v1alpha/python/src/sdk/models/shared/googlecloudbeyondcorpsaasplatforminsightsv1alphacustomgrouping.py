from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaCustomGrouping:
    r"""GoogleCloudBeyondcorpSaasplatformInsightsV1alphaCustomGrouping
    Customised grouping option that allows setting the group_by fields and also the filters togather for a configured insight request.
    """
    
    field_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldFilter') }})
    group_fields: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupFields') }})
    
