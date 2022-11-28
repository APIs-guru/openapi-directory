from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostBarcodeDecodeRequestBody:
    barimage: bytes = field(metadata={'form': { 'field_name': 'barimage' }})
    

@dataclass
class PostBarcodeDecodeSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostBarcodeDecodeRequest:
    security: PostBarcodeDecodeSecurity = field()
    request: Optional[PostBarcodeDecodeRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class PostBarcodeDecodeResponse:
    content_type: str = field()
    status_code: int = field()
    
