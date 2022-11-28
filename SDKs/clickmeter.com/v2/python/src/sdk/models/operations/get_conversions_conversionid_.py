from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetConversionsConversionIDPathParams:
    conversion_id: int = field(metadata={'path_param': { 'field_name': 'conversionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConversionsConversionIDRequest:
    path_params: GetConversionsConversionIDPathParams = field()
    

@dataclass
class GetConversionsConversionIDResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_dto_conversions_conversion: Optional[shared.APICoreDtoConversionsConversion] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
