from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetConversionsConversionIDPathParams:
    conversion_id: int = field(default=None, metadata={'path_param': { 'field_name': 'conversionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConversionsConversionIDRequest:
    path_params: GetConversionsConversionIDPathParams = field(default=None)
    

@dataclass
class GetConversionsConversionIDResponse:
    api_core_dto_conversions_conversion: Optional[shared.APICoreDtoConversionsConversion] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
