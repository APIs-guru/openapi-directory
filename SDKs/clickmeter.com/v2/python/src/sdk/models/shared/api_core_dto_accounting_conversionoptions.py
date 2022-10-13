from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APICoreDtoAccountingConversionOptions:
    hide_com_cost: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hideComCost' }, 'form': { 'field_name': 'hideComCost' }})
    hide_cost: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hideCost' }, 'form': { 'field_name': 'hideCost' }})
    hide_count: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hideCount' }, 'form': { 'field_name': 'hideCount' }})
    hide_params: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hideParams' }, 'form': { 'field_name': 'hideParams' }})
    hide_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hideValue' }, 'form': { 'field_name': 'hideValue' }})
    percent_commission: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentCommission' }, 'form': { 'field_name': 'percentCommission' }})
    percent_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentValue' }, 'form': { 'field_name': 'percentValue' }})
    
