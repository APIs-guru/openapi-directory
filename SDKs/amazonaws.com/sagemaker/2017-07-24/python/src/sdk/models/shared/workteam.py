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
class Workteam:
    r"""Workteam
    Provides details about a labeling work team.
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    member_definitions: List[MemberDefinition] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MemberDefinitions') }})
    workteam_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkteamArn') }})
    workteam_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkteamName') }})
    create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdatedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    notification_configuration: Optional[NotificationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationConfiguration') }})
    product_listing_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductListingIds') }})
    sub_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubDomain') }})
    workforce_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkforceArn') }})
    
