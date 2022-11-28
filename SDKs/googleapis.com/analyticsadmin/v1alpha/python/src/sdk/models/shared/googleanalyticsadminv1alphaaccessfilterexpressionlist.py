from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAccessFilterExpressionList:
    r"""GoogleAnalyticsAdminV1alphaAccessFilterExpressionList
    A list of filter expressions.
    """
    
    expressions: Optional[List[GoogleAnalyticsAdminV1alphaAccessFilterExpression]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expressions') }})
    
