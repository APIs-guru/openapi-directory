from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import includeconditions
from . import linkedforeignaccount
from . import includeconditions


@dataclass_json
@dataclass
class RemarketingAudienceAudienceDefinition:
    include_conditions: Optional[includeconditions.IncludeConditions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeConditions' }})
    

@dataclass_json
@dataclass
class RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions:
    exclusion_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exclusionDuration' }})
    segment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segment' }})
    

@dataclass_json
@dataclass
class RemarketingAudienceStateBasedAudienceDefinition:
    exclude_conditions: Optional[RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludeConditions' }})
    include_conditions: Optional[includeconditions.IncludeConditions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeConditions' }})
    

@dataclass_json
@dataclass
class RemarketingAudience:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    audience_definition: Optional[RemarketingAudienceAudienceDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audienceDefinition' }})
    audience_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audienceType' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    internal_web_property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'internalWebPropertyId' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    linked_ad_accounts: Optional[List[linkedforeignaccount.LinkedForeignAccount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkedAdAccounts' }})
    linked_views: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkedViews' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state_based_audience_definition: Optional[RemarketingAudienceStateBasedAudienceDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateBasedAudienceDefinition' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    web_property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webPropertyId' }})
    
