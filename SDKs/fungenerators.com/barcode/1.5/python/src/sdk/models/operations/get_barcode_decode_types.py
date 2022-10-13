from dataclasses import dataclass, field



@dataclass
class GetBarcodeDecodeTypesSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetBarcodeDecodeTypesRequest:
    security: GetBarcodeDecodeTypesSecurity = field(default=None)
    

@dataclass
class GetBarcodeDecodeTypesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
