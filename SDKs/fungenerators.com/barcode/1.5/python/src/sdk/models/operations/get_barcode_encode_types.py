from dataclasses import dataclass, field



@dataclass
class GetBarcodeEncodeTypesSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetBarcodeEncodeTypesRequest:
    security: GetBarcodeEncodeTypesSecurity = field(default=None)
    

@dataclass
class GetBarcodeEncodeTypesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
