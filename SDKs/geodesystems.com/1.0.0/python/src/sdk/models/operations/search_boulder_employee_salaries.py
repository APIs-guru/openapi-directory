from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class SearchBoulderEmployeeSalariesQueryParams:
    changedate_from: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'changedate.from', 'style': 'form', 'explode': True }})
    changedate_to: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'changedate.to', 'style': 'form', 'explode': True }})
    createdate_from: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'createdate.from', 'style': 'form', 'explode': True }})
    createdate_to: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'createdate.to', 'style': 'form', 'explode': True }})
    description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    filesuffix: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filesuffix', 'style': 'form', 'explode': True }})
    fromdate: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'fromdate', 'style': 'form', 'explode': True }})
    group: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'group', 'style': 'form', 'explode': True }})
    max: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': True }})
    maxlatitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'maxlatitude', 'style': 'form', 'explode': True }})
    maxlongitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'maxlongitude', 'style': 'form', 'explode': True }})
    minlatitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'minlatitude', 'style': 'form', 'explode': True }})
    minlongitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'minlongitude', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    search_db_boulder_employee_salaries_department: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_employee_salaries.department', 'style': 'form', 'explode': True }})
    search_db_boulder_employee_salaries_employee_annual_base_salary: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_employee_salaries.employee_annual_base_salary', 'style': 'form', 'explode': True }})
    search_db_boulder_employee_salaries_employee_flsa_exempt_y_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_employee_salaries.employee_flsa_exempt_y_n', 'style': 'form', 'explode': True }})
    search_db_boulder_employee_salaries_employee_fte_in_this_position: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_employee_salaries.employee_fte_in_this_position', 'style': 'form', 'explode': True }})
    search_db_boulder_employee_salaries_employee_hourly_pay_rate: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_employee_salaries.employee_hourly_pay_rate', 'style': 'form', 'explode': True }})
    search_db_boulder_employee_salaries_pay_range_max: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_employee_salaries.pay_range_max', 'style': 'form', 'explode': True }})
    search_db_boulder_employee_salaries_pay_range_min: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_employee_salaries.pay_range_min', 'style': 'form', 'explode': True }})
    search_db_boulder_employee_salaries_position_description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_employee_salaries.position_description', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    todate: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchBoulderEmployeeSalariesRequest:
    query_params: SearchBoulderEmployeeSalariesQueryParams = field()
    

@dataclass
class SearchBoulderEmployeeSalariesResponse:
    content_type: str = field()
    status_code: int = field()
    
