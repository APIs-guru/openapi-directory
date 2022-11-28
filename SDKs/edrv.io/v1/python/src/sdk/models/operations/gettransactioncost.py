from dataclasses import dataclass, field



@dataclass
class GetTransactionCostPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTransactionCostRequest:
    path_params: GetTransactionCostPathParams = field()
    

@dataclass
class GetTransactionCostResponse:
    content_type: str = field()
    status_code: int = field()
    
