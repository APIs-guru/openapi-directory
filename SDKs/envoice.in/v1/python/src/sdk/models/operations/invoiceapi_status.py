from dataclasses import dataclass, field
from typing import Enum,Optional


@dataclass
class InvoiceAPIStatusQueryParams:
    id: int = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class InvoiceAPIStatusHeaders:
    x_auth_key: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class InvoiceAPIStatusRequest:
    query_params: InvoiceAPIStatusQueryParams = field(default=None)
    headers: InvoiceAPIStatusHeaders = field(default=None)
    
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
class InvoiceAPIStatusResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    invoice_api_status_200_application_json_string_enum: Optional[InvoiceAPIStatus200ApplicationJSONEnum] = field(default=None)
    invoice_api_status_200_text_json_string_enum: Optional[InvoiceAPIStatus200TextJSONEnum] = field(default=None)
    status_code: int = field(default=None)
    
