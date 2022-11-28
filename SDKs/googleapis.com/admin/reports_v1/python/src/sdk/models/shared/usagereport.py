from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UsageReportEntity:
    r"""UsageReportEntity
    Output only. Information about the type of the item.
    """
    
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerId') }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityId') }})
    profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileId') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    user_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userEmail') }})
    

@dataclass_json
@dataclass
class UsageReportParameters:
    bool_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boolValue') }})
    datetime_value: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datetimeValue'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    int_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intValue') }})
    msg_value: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('msgValue') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    

@dataclass_json
@dataclass
class UsageReport:
    r"""UsageReport
    JSON template for a usage report.
    """
    
    date_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    entity: Optional[UsageReportEntity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    parameters: Optional[List[UsageReportParameters]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    
