from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dimensioncontribution


@dataclass_json
@dataclass
class ContributionMatrix:
    dimension_contribution_list: Optional[List[dimensioncontribution.DimensionContribution]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DimensionContributionList' }})
    
