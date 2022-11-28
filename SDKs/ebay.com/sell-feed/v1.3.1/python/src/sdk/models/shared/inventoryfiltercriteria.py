from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InventoryFilterCriteria:
    r"""InventoryFilterCriteria
    The container for the filter fields. This container is used to set the filter criteria for the order report. A seller can set date range filters and/or can retrieve orders in a specific state.
    """
    
    creation_date_range: Optional[DateRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDateRange') }})
    listing_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listingFormat') }})
    listing_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listingStatus') }})
    modified_date_range: Optional[DateRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedDateRange') }})
    
