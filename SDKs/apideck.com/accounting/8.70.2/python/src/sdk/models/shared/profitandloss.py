from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import profitandlosssection
from . import profitandlossrecord
from . import profitandlosssection
from . import profitandlossrecord
from . import profitandlosssection
from . import profitandlossrecord
from . import profitandlosssection
from . import profitandlossrecord
from . import profitandlosssection
from . import profitandlossrecord


@dataclass_json
@dataclass
class ProfitAndLossExpenses:
    records: List[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'records' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class ProfitAndLossGrossProfit:
    records: List[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'records' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class ProfitAndLossIncome:
    records: List[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'records' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class ProfitAndLossNetIncome:
    records: List[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'records' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class ProfitAndLossNetOperatingIncome:
    records: List[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'records' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class ProfitAndLoss:
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer_id' }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_date' }})
    expenses: ProfitAndLossExpenses = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expenses' }})
    gross_profit: Optional[ProfitAndLossGrossProfit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross_profit' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    income: ProfitAndLossIncome = field(default=None, metadata={'dataclasses_json': { 'field_name': 'income' }})
    net_income: Optional[ProfitAndLossNetIncome] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net_income' }})
    net_operating_income: Optional[ProfitAndLossNetOperatingIncome] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net_operating_income' }})
    report_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report_name' }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_date' }})
    
