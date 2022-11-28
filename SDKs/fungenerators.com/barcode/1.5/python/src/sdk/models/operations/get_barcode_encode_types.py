from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetBarcodeEncodeTypesSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetBarcodeEncodeTypesRequest:
    security: GetBarcodeEncodeTypesSecurity = field()
    

@dataclass
class GetBarcodeEncodeTypesResponse:
    content_type: str = field()
    status_code: int = field()
    
