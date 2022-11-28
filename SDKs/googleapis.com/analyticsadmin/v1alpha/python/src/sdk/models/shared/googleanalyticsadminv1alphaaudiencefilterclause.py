from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnum(str, Enum):
    AUDIENCE_CLAUSE_TYPE_UNSPECIFIED = "AUDIENCE_CLAUSE_TYPE_UNSPECIFIED"
    INCLUDE = "INCLUDE"
    EXCLUDE = "EXCLUDE"


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAudienceFilterClause:
    r"""GoogleAnalyticsAdminV1alphaAudienceFilterClause
    A clause for defining either a simple or sequence filter. A filter can be inclusive (i.e., users satisfying the filter clause are included in the Audience) or exclusive (i.e., users satisfying the filter clause are excluded from the Audience).
    """
    
    clause_type: Optional[GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clauseType') }})
    sequence_filter: Optional[GoogleAnalyticsAdminV1alphaAudienceSequenceFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sequenceFilter') }})
    simple_filter: Optional[GoogleAnalyticsAdminV1alphaAudienceSimpleFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simpleFilter') }})
    
