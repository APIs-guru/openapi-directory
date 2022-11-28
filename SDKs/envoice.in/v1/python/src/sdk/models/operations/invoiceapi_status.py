from dataclasses import dataclass, field
from typing import Optional
from enum import Enum


@dataclass
class InvoiceAPIStatusQueryParams:
    id: int = field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class InvoiceAPIStatusHeaders:
    x_auth_key: str = field(metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    
class InvoiceAPIStatus200ApplicationJSONEnum(str, Enum):
    DRAFT = "Draft"
    PAID = "Paid"
    UNPAID = "Unpaid"
    OVERDUE = "Overdue"
    VOID = "Void"

class InvoiceAPIStatus200TextJSONEnum(str, Enum):
    DRAFT = "Draft"
    PAID = "Paid"
    UNPAID = "Unpaid"
    OVERDUE = "Overdue"
    VOID = "Void"


@dataclass
class InvoiceAPIStatusRequest:
    headers: InvoiceAPIStatusHeaders = field()
    query_params: InvoiceAPIStatusQueryParams = field()
    

@dataclass
class InvoiceAPIStatusResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    invoice_api_status_200_application_json_string_enum: Optional[InvoiceAPIStatus200ApplicationJSONEnum] = field(default=None)
    invoice_api_status_200_text_json_string_enum: Optional[InvoiceAPIStatus200TextJSONEnum] = field(default=None)
    
