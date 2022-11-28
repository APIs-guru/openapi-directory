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
class CreateReportTask:
    r"""CreateReportTask
    This type defines the rules that govern the generation of a report task and the criteria that's used to create the report. The report-generation rules include the starting and ending dates for the report. Report-task criteria includes the report dimensions, metrics, listings covered in the report, and so on. For information on the required and optional fields for each report type, see Reading Promoted Listings reports.
    """
    
    campaign_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignIds') }})
    date_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateFrom') }})
    date_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateTo') }})
    dimensions: Optional[List[Dimension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    inventory_references: Optional[List[InventoryReference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryReferences') }})
    listing_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listingIds') }})
    marketplace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceId') }})
    metric_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricKeys') }})
    report_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportFormat') }})
    report_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportType') }})
    
