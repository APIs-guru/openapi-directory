from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PayrollTotals:
    check_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'check_amount' }})
    company_debit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company_debit' }})
    employee_benefit_deductions: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employee_benefit_deductions' }})
    employee_taxes: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employee_taxes' }})
    employer_benefit_contributions: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employer_benefit_contributions' }})
    employer_taxes: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employer_taxes' }})
    gross_pay: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross_pay' }})
    net_pay: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net_pay' }})
    tax_debit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax_debit' }})
    
