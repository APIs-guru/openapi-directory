from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutComplianceItemsRequest:
    compliance_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceType') }})
    execution_summary: ComplianceExecutionSummary = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionSummary') }})
    items: List[ComplianceItemEntry] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Items') }})
    resource_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    resource_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    item_content_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ItemContentHash') }})
    upload_type: Optional[ComplianceUploadTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UploadType') }})
    
