from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV3CountriesHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3CountriesRequest:
    headers: GetV3CountriesHeaders = field()
    

@dataclass
class GetV3CountriesResponse:
    content_type: str = field()
    status_code: int = field()
    countries_list: Optional[shared.CountriesList] = field(default=None)
    
