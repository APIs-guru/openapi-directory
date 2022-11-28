from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoalEventDetailsEventConditions:
    comparison_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparisonType') }})
    comparison_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparisonValue') }})
    expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expression') }})
    match_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchType') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class GoalEventDetails:
    r"""GoalEventDetails
    Details for the goal of the type EVENT.
    """
    
    event_conditions: Optional[List[GoalEventDetailsEventConditions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventConditions') }})
    use_event_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useEventValue') }})
    

@dataclass_json
@dataclass
class GoalParentLink:
    r"""GoalParentLink
    Parent link for a goal. Points to the view (profile) to which this goal belongs.
    """
    
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class GoalURLDestinationDetailsSteps:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class GoalURLDestinationDetails:
    r"""GoalURLDestinationDetails
    Details for the goal of the type URL_DESTINATION.
    """
    
    case_sensitive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caseSensitive') }})
    first_step_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstStepRequired') }})
    match_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchType') }})
    steps: Optional[List[GoalURLDestinationDetailsSteps]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('steps') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class GoalVisitNumPagesDetails:
    r"""GoalVisitNumPagesDetails
    Details for the goal of the type VISIT_NUM_PAGES.
    """
    
    comparison_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparisonType') }})
    comparison_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparisonValue') }})
    

@dataclass_json
@dataclass
class GoalVisitTimeOnSiteDetails:
    r"""GoalVisitTimeOnSiteDetails
    Details for the goal of the type VISIT_TIME_ON_SITE.
    """
    
    comparison_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparisonType') }})
    comparison_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparisonValue') }})
    

@dataclass_json
@dataclass
class Goal:
    r"""Goal
    JSON template for Analytics goal resource.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_details: Optional[GoalEventDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventDetails') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    internal_web_property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internalWebPropertyId') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_link: Optional[GoalParentLink] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentLink') }})
    profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileId') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url_destination_details: Optional[GoalURLDestinationDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlDestinationDetails') }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    visit_num_pages_details: Optional[GoalVisitNumPagesDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visitNumPagesDetails') }})
    visit_time_on_site_details: Optional[GoalVisitTimeOnSiteDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visitTimeOnSiteDetails') }})
    web_property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webPropertyId') }})
    
