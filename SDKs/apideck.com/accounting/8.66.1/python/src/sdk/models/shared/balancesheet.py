from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BalanceSheetAssetsCurrentAssetsAccounts:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class BalanceSheetAssetsCurrentAssets:
    accounts: List[BalanceSheetAssetsCurrentAssetsAccounts] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accounts' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class BalanceSheetAssetsFixedAssetsAccounts:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class BalanceSheetAssetsFixedAssets:
    accounts: List[BalanceSheetAssetsFixedAssetsAccounts] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accounts' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class BalanceSheetAssets:
    current_assets: BalanceSheetAssetsCurrentAssets = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_assets' }})
    fixed_assets: BalanceSheetAssetsFixedAssets = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixed_assets' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class BalanceSheetEquityItems:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class BalanceSheetEquity:
    items: List[BalanceSheetEquityItems] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class BalanceSheetLiabilitiesAccounts:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class BalanceSheetLiabilities:
    accounts: List[BalanceSheetLiabilitiesAccounts] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accounts' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class BalanceSheet:
    assets: BalanceSheetAssets = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_date' }})
    equity: BalanceSheetEquity = field(default=None, metadata={'dataclasses_json': { 'field_name': 'equity' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    liabilities: BalanceSheetLiabilities = field(default=None, metadata={'dataclasses_json': { 'field_name': 'liabilities' }})
    report_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report_name' }})
    start_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_date' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_by' }})
    
