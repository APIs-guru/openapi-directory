from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField:
    r"""GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField
    Field metadata. Commonly understandable name and description for the field. Multiple such fields constitute the Insight.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    filter_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterAlias') }})
    filterable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterable') }})
    groupable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupable') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
