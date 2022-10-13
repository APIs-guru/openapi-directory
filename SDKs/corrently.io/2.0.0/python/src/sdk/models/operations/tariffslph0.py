from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class TariffSlph0QueryParams:
    zipcode: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'zipcode', 'style': 'form', 'explode': True }})
    

@dataclass
class TariffSlph0Request:
    query_params: TariffSlph0QueryParams = field(default=None)
    

@dataclass
class TariffSlph0Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tariffh0s: Optional[List[shared.Tariffh0]] = field(default=None)
    
