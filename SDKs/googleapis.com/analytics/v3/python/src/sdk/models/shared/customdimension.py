from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CustomDimensionParentLink:
    r"""CustomDimensionParentLink
    Parent link for the custom dimension. Points to the property to which the custom dimension belongs.
    """
    
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class CustomDimension:
    r"""CustomDimension
    JSON template for Analytics Custom Dimension.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_link: Optional[CustomDimensionParentLink] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentLink') }})
    scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    web_property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webPropertyId') }})
    

@dataclass_json
@dataclass
class CustomDimensionInput:
    r"""CustomDimensionInput
    JSON template for Analytics Custom Dimension.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_link: Optional[CustomDimensionParentLink] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentLink') }})
    scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    web_property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webPropertyId') }})
    
