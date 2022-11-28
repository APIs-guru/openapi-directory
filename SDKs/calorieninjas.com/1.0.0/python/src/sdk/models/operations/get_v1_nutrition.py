from dataclasses import dataclass, field



@dataclass
class GetV1NutritionQueryParams:
    query: str = field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV1NutritionRequest:
    query_params: GetV1NutritionQueryParams = field()
    

@dataclass
class GetV1NutritionResponse:
    content_type: str = field()
    status_code: int = field()
    
