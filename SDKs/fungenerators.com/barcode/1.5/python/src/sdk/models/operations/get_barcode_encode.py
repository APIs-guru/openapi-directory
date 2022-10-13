from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetBarcodeEncodeQueryParams:
    barcodeformat: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'barcodeformat', 'style': 'form', 'explode': True }})
    number: str = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    outputformat: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'outputformat', 'style': 'form', 'explode': True }})
    totalheight: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'totalheight', 'style': 'form', 'explode': True }})
    widthfactor: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'widthfactor', 'style': 'form', 'explode': True }})
    

@dataclass
class GetBarcodeEncodeSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetBarcodeEncodeRequest:
    query_params: GetBarcodeEncodeQueryParams = field(default=None)
    security: GetBarcodeEncodeSecurity = field(default=None)
    

@dataclass
class GetBarcodeEncodeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
