from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dimension
from . import inventoryreference


@dataclass_json
@dataclass
class ReportTask:
    campaign_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaignIds' }})
    date_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateFrom' }})
    date_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateTo' }})
    dimensions: Optional[List[dimension.Dimension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    inventory_references: Optional[List[inventoryreference.InventoryReference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventoryReferences' }})
    listing_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listingIds' }})
    marketplace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marketplaceId' }})
    metric_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricKeys' }})
    report_expiration_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportExpirationDate' }})
    report_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportFormat' }})
    report_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportHref' }})
    report_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportId' }})
    report_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportName' }})
    report_task_completion_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportTaskCompletionDate' }})
    report_task_creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportTaskCreationDate' }})
    report_task_expected_completion_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportTaskExpectedCompletionDate' }})
    report_task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportTaskId' }})
    report_task_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportTaskStatus' }})
    report_task_status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportTaskStatusMessage' }})
    report_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportType' }})
    
