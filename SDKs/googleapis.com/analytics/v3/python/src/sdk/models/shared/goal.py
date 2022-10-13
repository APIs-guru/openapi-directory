from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoalEventDetailsEventConditions:
    comparison_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comparisonType' }})
    comparison_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comparisonValue' }})
    expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expression' }})
    match_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchType' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class GoalEventDetails:
    event_conditions: Optional[List[GoalEventDetailsEventConditions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventConditions' }})
    use_event_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useEventValue' }})
    

@dataclass_json
@dataclass
class GoalParentLink:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class GoalURLDestinationDetailsSteps:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class GoalURLDestinationDetails:
    case_sensitive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caseSensitive' }})
    first_step_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstStepRequired' }})
    match_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchType' }})
    steps: Optional[List[GoalURLDestinationDetailsSteps]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'steps' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class GoalVisitNumPagesDetails:
    comparison_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comparisonType' }})
    comparison_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comparisonValue' }})
    

@dataclass_json
@dataclass
class GoalVisitTimeOnSiteDetails:
    comparison_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comparisonType' }})
    comparison_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comparisonValue' }})
    

@dataclass_json
@dataclass
class Goal:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_details: Optional[GoalEventDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventDetails' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    internal_web_property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'internalWebPropertyId' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_link: Optional[GoalParentLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentLink' }})
    profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileId' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url_destination_details: Optional[GoalURLDestinationDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlDestinationDetails' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    visit_num_pages_details: Optional[GoalVisitNumPagesDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visitNumPagesDetails' }})
    visit_time_on_site_details: Optional[GoalVisitTimeOnSiteDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visitTimeOnSiteDetails' }})
    web_property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webPropertyId' }})
    
