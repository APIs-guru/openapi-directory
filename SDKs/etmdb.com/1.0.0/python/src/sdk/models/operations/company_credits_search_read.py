from dataclasses import dataclass, field



@dataclass
class CompanyCreditsSearchReadPathParams:
    movie_title: str = field(default=None, metadata={'path_param': { 'field_name': 'movie_title', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompanyCreditsSearchReadRequest:
    path_params: CompanyCreditsSearchReadPathParams = field(default=None)
    

@dataclass
class CompanyCreditsSearchReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
