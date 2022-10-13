from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APICoreDtoAccountingUser:
    bo_go_val: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boGoVal' }, 'form': { 'field_name': 'boGoVal' }})
    bonus_clicks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bonusClicks' }, 'form': { 'field_name': 'bonusClicks' }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companyName' }, 'form': { 'field_name': 'companyName' }})
    company_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companyRole' }, 'form': { 'field_name': 'companyRole' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }, 'form': { 'field_name': 'email' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }, 'form': { 'field_name': 'firstName' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }, 'form': { 'field_name': 'lastName' }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }, 'form': { 'field_name': 'phone' }})
    redirect_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirectOnly' }, 'form': { 'field_name': 'redirectOnly' }})
    registration_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registrationDate' }, 'form': { 'field_name': 'registrationDate' }})
    timeframe_min_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeframeMinDate' }, 'form': { 'field_name': 'timeframeMinDate' }})
    timezone: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }, 'form': { 'field_name': 'timezone' }})
    timezonename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezonename' }, 'form': { 'field_name': 'timezonename' }})
    
