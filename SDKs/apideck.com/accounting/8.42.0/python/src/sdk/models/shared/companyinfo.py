from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class CompanyInfoFiscalYearStartMonthTheStartMonthOfFiscalYearEnum(str, Enum):
    JANUARY = "January"
    FEBRUARY = "February"
    MARCH = "March"
    APRIL = "April"
    MAY = "May"
    JUNE = "June"
    JULY = "July"
    AUGUST = "August"
    SEPTEMBER = "September"
    OCTOBER = "October"
    NOVEMBER = "November"
    DECEMBER = "December"

class CompanyInfoStatusCompanyStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"


@dataclass_json
@dataclass
class CompanyInfo:
    addresses: Optional[List[shared.Address]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addresses' }})
    automated_sales_tax: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'automated_sales_tax' }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company_name' }})
    company_start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company_start_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    currency: Optional[shared.CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    default_sales_tax: Optional[shared.LinkedTaxRate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default_sales_tax' }})
    emails: Optional[List[shared.Email]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emails' }})
    fiscal_year_start_month: Optional[CompanyInfoFiscalYearStartMonthTheStartMonthOfFiscalYearEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fiscal_year_start_month' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    legal_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legal_name' }})
    phone_numbers: Optional[List[shared.PhoneNumber]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone_numbers' }})
    row_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'row_version' }})
    sales_tax_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sales_tax_enabled' }})
    sales_tax_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sales_tax_number' }})
    status: Optional[CompanyInfoStatusCompanyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_by' }})
    
