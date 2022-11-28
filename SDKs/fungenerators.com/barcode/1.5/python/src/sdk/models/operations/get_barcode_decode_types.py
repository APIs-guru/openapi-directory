from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetBarcodeDecodeTypesSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetBarcodeDecodeTypesRequest:
    security: GetBarcodeDecodeTypesSecurity = field()
    

@dataclass
class GetBarcodeDecodeTypesResponse:
    content_type: str = field()
    status_code: int = field()
    
