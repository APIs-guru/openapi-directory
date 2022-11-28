from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListRecommenderConfigurationsResponse:
    r"""ListRecommenderConfigurationsResponse
    Provides information about all the recommender model configurations that are associated with your Amazon Pinpoint account.
    """
    
    item: List[RecommenderConfigurationResponse] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Item') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
