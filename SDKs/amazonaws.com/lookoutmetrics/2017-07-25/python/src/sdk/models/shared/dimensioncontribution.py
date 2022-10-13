from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dimensionvaluecontribution


@dataclass_json
@dataclass
class DimensionContribution:
    dimension_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DimensionName' }})
    dimension_value_contribution_list: Optional[List[dimensionvaluecontribution.DimensionValueContribution]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DimensionValueContributionList' }})
    
