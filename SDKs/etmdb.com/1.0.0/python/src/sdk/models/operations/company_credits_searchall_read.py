from dataclasses import dataclass, field



@dataclass
class CompanyCreditsSearchallReadPathParams:
    param: str = field(metadata={'path_param': { 'field_name': 'param', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompanyCreditsSearchallReadRequest:
    path_params: CompanyCreditsSearchallReadPathParams = field()
    

@dataclass
class CompanyCreditsSearchallReadResponse:
    content_type: str = field()
    status_code: int = field()
    
