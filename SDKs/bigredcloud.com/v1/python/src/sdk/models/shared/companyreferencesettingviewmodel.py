from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CompanyReferenceSettingViewModel:
    creditors_journal: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creditorsJournal' }})
    debtors_journal: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debtorsJournal' }})
    purchases: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchases' }})
    sales: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sales' }})
    
