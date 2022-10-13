from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostBarcodeDecodeRequestBody:
    barimage: bytes = field(default=None, metadata={'form': { 'field_name': 'barimage' }})
    

@dataclass
class PostBarcodeDecodeSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostBarcodeDecodeRequest:
    request: Optional[PostBarcodeDecodeRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: PostBarcodeDecodeSecurity = field(default=None)
    

@dataclass
class PostBarcodeDecodeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
