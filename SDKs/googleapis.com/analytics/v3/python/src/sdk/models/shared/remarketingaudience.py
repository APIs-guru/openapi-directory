from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RemarketingAudienceAudienceDefinition:
    r"""RemarketingAudienceAudienceDefinition
    The simple audience definition that will cause a user to be added to an audience.
    """
    
    include_conditions: Optional[IncludeConditions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeConditions') }})
    

@dataclass_json
@dataclass
class RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions:
    r"""RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions
    Defines the conditions to exclude users from the audience.
    """
    
    exclusion_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusionDuration') }})
    segment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segment') }})
    

@dataclass_json
@dataclass
class RemarketingAudienceStateBasedAudienceDefinition:
    r"""RemarketingAudienceStateBasedAudienceDefinition
    A state based audience definition that will cause a user to be added or removed from an audience.
    """
    
    exclude_conditions: Optional[RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeConditions') }})
    include_conditions: Optional[IncludeConditions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeConditions') }})
    

@dataclass_json
@dataclass
class RemarketingAudience:
    r"""RemarketingAudience
    JSON template for an Analytics remarketing audience.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    audience_definition: Optional[RemarketingAudienceAudienceDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audienceDefinition') }})
    audience_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audienceType') }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    internal_web_property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internalWebPropertyId') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    linked_ad_accounts: Optional[List[LinkedForeignAccount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedAdAccounts') }})
    linked_views: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedViews') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state_based_audience_definition: Optional[RemarketingAudienceStateBasedAudienceDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateBasedAudienceDefinition') }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    web_property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webPropertyId') }})
    

@dataclass_json
@dataclass
class RemarketingAudienceInput:
    r"""RemarketingAudienceInput
    JSON template for an Analytics remarketing audience.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    audience_definition: Optional[RemarketingAudienceAudienceDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audienceDefinition') }})
    audience_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audienceType') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    linked_ad_accounts: Optional[List[LinkedForeignAccountInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedAdAccounts') }})
    linked_views: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedViews') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state_based_audience_definition: Optional[RemarketingAudienceStateBasedAudienceDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateBasedAudienceDefinition') }})
    web_property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webPropertyId') }})
    
