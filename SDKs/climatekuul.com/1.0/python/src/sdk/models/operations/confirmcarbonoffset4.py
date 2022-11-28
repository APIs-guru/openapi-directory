from dataclasses import dataclass, field
from typing import Optional


CONFIRM_CARBON_OFFSET4_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
]


@dataclass
class ConfirmCarbonOffset4RequestBody:
    carbon_offset: str = field(metadata={'form': { 'field_name': 'carbonOffset' }})
    transaction_id: str = field(metadata={'form': { 'field_name': 'transaction_id' }})
    contact_email: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'contactEmail' }})
    contact_first_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'contactFirstName' }})
    contact_last_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'contactLastName' }})
    

@dataclass
class ConfirmCarbonOffset4Request:
    request: Optional[ConfirmCarbonOffset4RequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ConfirmCarbonOffset4Response:
    content_type: str = field()
    status_code: int = field()
    
