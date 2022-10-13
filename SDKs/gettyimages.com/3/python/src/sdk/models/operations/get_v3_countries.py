from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetV3CountriesHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language' }})
    

@dataclass
class GetV3CountriesRequest:
    headers: GetV3CountriesHeaders = field(default=None)
    

@dataclass
class GetV3CountriesResponse:
    content_type: str = field(default=None)
    countries_list: Optional[shared.CountriesList] = field(default=None)
    status_code: int = field(default=None)
    
