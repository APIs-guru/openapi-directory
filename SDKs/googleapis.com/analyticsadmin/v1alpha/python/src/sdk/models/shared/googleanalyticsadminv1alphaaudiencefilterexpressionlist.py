from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList:
    r"""GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList
    A list of Audience filter expressions.
    """
    
    filter_expressions: Optional[List[GoogleAnalyticsAdminV1alphaAudienceFilterExpression]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterExpressions') }})
    
