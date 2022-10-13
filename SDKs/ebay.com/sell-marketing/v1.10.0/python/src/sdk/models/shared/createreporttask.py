from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dimension
from . import inventoryreference


@dataclass_json
@dataclass
class CreateReportTask:
    campaign_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaignIds' }})
    date_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateFrom' }})
    date_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateTo' }})
    dimensions: Optional[List[dimension.Dimension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    inventory_references: Optional[List[inventoryreference.InventoryReference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventoryReferences' }})
    listing_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listingIds' }})
    marketplace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marketplaceId' }})
    metric_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricKeys' }})
    report_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportFormat' }})
    report_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportType' }})
    
