from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProfitAndLossExpenses:
    records: List[Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('records') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclass
class ProfitAndLossGrossProfit:
    records: List[Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('records') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclass
class ProfitAndLossIncome:
    records: List[Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('records') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclass
class ProfitAndLossNetIncome:
    records: List[Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('records') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclass
class ProfitAndLossNetOperatingIncome:
    records: List[Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('records') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclass
class ProfitAndLoss:
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    expenses: ProfitAndLossExpenses = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expenses') }})
    income: ProfitAndLossIncome = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('income') }})
    report_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('report_name') }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer_id') }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date') }})
    gross_profit: Optional[ProfitAndLossGrossProfit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross_profit') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    net_income: Optional[ProfitAndLossNetIncome] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('net_income') }})
    net_operating_income: Optional[ProfitAndLossNetOperatingIncome] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('net_operating_income') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_date') }})
    
