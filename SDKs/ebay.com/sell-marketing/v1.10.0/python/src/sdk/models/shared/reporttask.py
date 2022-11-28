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
class ReportTask:
    r"""ReportTask
    This type defines the fields in a report task.
    """
    
    campaign_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignIds') }})
    date_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateFrom') }})
    date_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateTo') }})
    dimensions: Optional[List[Dimension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    inventory_references: Optional[List[InventoryReference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryReferences') }})
    listing_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listingIds') }})
    marketplace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceId') }})
    metric_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricKeys') }})
    report_expiration_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportExpirationDate') }})
    report_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportFormat') }})
    report_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportHref') }})
    report_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportId') }})
    report_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportName') }})
    report_task_completion_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportTaskCompletionDate') }})
    report_task_creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportTaskCreationDate') }})
    report_task_expected_completion_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportTaskExpectedCompletionDate') }})
    report_task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportTaskId') }})
    report_task_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportTaskStatus') }})
    report_task_status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportTaskStatusMessage') }})
    report_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportType') }})
    
