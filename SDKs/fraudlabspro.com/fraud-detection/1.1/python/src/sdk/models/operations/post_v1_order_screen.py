from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class PostV1OrderScreenFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class PostV1OrderScreenQueryParams:
    ip: str = field(metadata={'query_param': { 'field_name': 'ip', 'style': 'form', 'explode': True }})
    key: str = field(metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    amount: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'amount', 'style': 'form', 'explode': True }})
    avs_result: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'avs_result', 'style': 'form', 'explode': True }})
    bill_addr: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'bill_addr', 'style': 'form', 'explode': True }})
    bill_city: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'bill_city', 'style': 'form', 'explode': True }})
    bill_country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'bill_country', 'style': 'form', 'explode': True }})
    bill_state: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'bill_state', 'style': 'form', 'explode': True }})
    bill_zip_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'bill_zip_code', 'style': 'form', 'explode': True }})
    bin_no: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'bin_no', 'style': 'form', 'explode': True }})
    card_hash: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'card_hash', 'style': 'form', 'explode': True }})
    currency: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'currency', 'style': 'form', 'explode': True }})
    cvv_result: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cvv_result', 'style': 'form', 'explode': True }})
    department: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'department', 'style': 'form', 'explode': True }})
    email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    email_domain: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'email_domain', 'style': 'form', 'explode': True }})
    email_hash: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'email_hash', 'style': 'form', 'explode': True }})
    first_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'first_name', 'style': 'form', 'explode': True }})
    flp_checksum: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'flp_checksum', 'style': 'form', 'explode': True }})
    format: Optional[PostV1OrderScreenFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    last_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'last_name', 'style': 'form', 'explode': True }})
    password_hash: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'password_hash', 'style': 'form', 'explode': True }})
    payment_mode: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'payment_mode', 'style': 'form', 'explode': True }})
    quantity: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'quantity', 'style': 'form', 'explode': True }})
    ship_addr: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ship_addr', 'style': 'form', 'explode': True }})
    ship_city: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ship_city', 'style': 'form', 'explode': True }})
    ship_country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ship_country', 'style': 'form', 'explode': True }})
    ship_state: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ship_state', 'style': 'form', 'explode': True }})
    ship_zip_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ship_zip_code', 'style': 'form', 'explode': True }})
    user_order_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'user_order_id', 'style': 'form', 'explode': True }})
    user_order_memo: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'user_order_memo', 'style': 'form', 'explode': True }})
    user_phone: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'user_phone', 'style': 'form', 'explode': True }})
    username_hash: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'username_hash', 'style': 'form', 'explode': True }})
    

@dataclass
class PostV1OrderScreenRequest:
    query_params: PostV1OrderScreenQueryParams = field()
    

@dataclass
class PostV1OrderScreenResponse:
    content_type: str = field()
    status_code: int = field()
    post_v1_order_screen_200_application_json_string: Optional[str] = field(default=None)
    
