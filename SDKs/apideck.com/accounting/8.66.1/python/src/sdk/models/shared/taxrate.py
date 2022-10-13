from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json

class TaxRateStatusTaxRateStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"
    ARCHIVED = "archived"


@dataclass_json
@dataclass
class TaxRate:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    components: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'components' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    effective_tax_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effective_tax_rate' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    original_tax_rate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'original_tax_rate_id' }})
    report_tax_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report_tax_type' }})
    row_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'row_version' }})
    status: Optional[TaxRateStatusTaxRateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tax_payable_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax_payable_account_id' }})
    tax_remitted_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax_remitted_account_id' }})
    total_tax_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_tax_rate' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_by' }})
    
