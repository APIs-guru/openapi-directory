from dataclasses import dataclass, field



@dataclass
class CompanyCreditsSearchReadPathParams:
    movie_title: str = field(metadata={'path_param': { 'field_name': 'movie_title', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompanyCreditsSearchReadRequest:
    path_params: CompanyCreditsSearchReadPathParams = field()
    

@dataclass
class CompanyCreditsSearchReadResponse:
    content_type: str = field()
    status_code: int = field()
    
