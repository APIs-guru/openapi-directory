from dataclasses import dataclass, field



@dataclass
class CompanyCreditsSearchallReadPathParams:
    param: str = field(default=None, metadata={'path_param': { 'field_name': 'param', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompanyCreditsSearchallReadRequest:
    path_params: CompanyCreditsSearchallReadPathParams = field(default=None)
    

@dataclass
class CompanyCreditsSearchallReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
