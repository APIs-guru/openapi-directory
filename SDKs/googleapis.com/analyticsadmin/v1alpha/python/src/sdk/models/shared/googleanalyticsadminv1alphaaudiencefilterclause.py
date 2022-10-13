from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphaaudiencesequencefilter
from . import googleanalyticsadminv1alphaaudiencesimplefilter

class GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnum(str, Enum):
    AUDIENCE_CLAUSE_TYPE_UNSPECIFIED = "AUDIENCE_CLAUSE_TYPE_UNSPECIFIED"
    INCLUDE = "INCLUDE"
    EXCLUDE = "EXCLUDE"


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAudienceFilterClause:
    clause_type: Optional[GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clauseType' }})
    sequence_filter: Optional[googleanalyticsadminv1alphaaudiencesequencefilter.GoogleAnalyticsAdminV1alphaAudienceSequenceFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sequenceFilter' }})
    simple_filter: Optional[googleanalyticsadminv1alphaaudiencesimplefilter.GoogleAnalyticsAdminV1alphaAudienceSimpleFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'simpleFilter' }})
    
