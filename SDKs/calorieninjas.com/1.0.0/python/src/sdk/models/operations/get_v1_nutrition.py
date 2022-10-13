from dataclasses import dataclass, field



@dataclass
class GetV1NutritionQueryParams:
    query: str = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV1NutritionRequest:
    query_params: GetV1NutritionQueryParams = field(default=None)
    

@dataclass
class GetV1NutritionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
