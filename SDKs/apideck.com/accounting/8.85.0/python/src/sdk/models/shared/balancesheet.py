from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BalanceSheetAssetsCurrentAssetsAccounts:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class BalanceSheetAssetsCurrentAssets:
    accounts: List[BalanceSheetAssetsCurrentAssetsAccounts] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclass
class BalanceSheetAssetsFixedAssetsAccounts:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class BalanceSheetAssetsFixedAssets:
    accounts: List[BalanceSheetAssetsFixedAssetsAccounts] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclass
class BalanceSheetAssets:
    current_assets: BalanceSheetAssetsCurrentAssets = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_assets') }})
    fixed_assets: BalanceSheetAssetsFixedAssets = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixed_assets') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclass
class BalanceSheetEquityItems:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class BalanceSheetEquity:
    items: List[BalanceSheetEquityItems] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclass
class BalanceSheetLiabilitiesAccounts:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class BalanceSheetLiabilities:
    accounts: List[BalanceSheetLiabilitiesAccounts] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclass
class BalanceSheet:
    assets: BalanceSheetAssets = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    equity: BalanceSheetEquity = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('equity') }})
    liabilities: BalanceSheetLiabilities = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('liabilities') }})
    report_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('report_name') }})
    start_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_date') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_by') }})
    
