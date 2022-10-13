from dataclasses import dataclass, field
from typing import Optional
CONFIRM_CARBON_OFFSET3_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
]


@dataclass
class ConfirmCarbonOffset3RequestBody:
    carbon_offset: str = field(default=None, metadata={'form': { 'field_name': 'carbonOffset' }})
    contact_email: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'contactEmail' }})
    contact_first_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'contactFirstName' }})
    contact_last_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'contactLastName' }})
    transaction_id: str = field(default=None, metadata={'form': { 'field_name': 'transaction_id' }})
    

@dataclass
class ConfirmCarbonOffset3Request:
    server_url: Optional[str] = field(default=None)
    request: Optional[ConfirmCarbonOffset3RequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class ConfirmCarbonOffset3Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
