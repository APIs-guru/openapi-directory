from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import complianceexecutionsummary
from . import complianceitementry
from . import complianceuploadtype_enum


@dataclass_json
@dataclass
class PutComplianceItemsRequest:
    compliance_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceType' }})
    execution_summary: complianceexecutionsummary.ComplianceExecutionSummary = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionSummary' }})
    item_content_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ItemContentHash' }})
    items: List[complianceitementry.ComplianceItemEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Items' }})
    resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    resource_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    upload_type: Optional[complianceuploadtype_enum.ComplianceUploadTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UploadType' }})
    
