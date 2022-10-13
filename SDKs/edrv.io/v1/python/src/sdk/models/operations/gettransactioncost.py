from dataclasses import dataclass, field



@dataclass
class GetTransactionCostPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTransactionCostRequest:
    path_params: GetTransactionCostPathParams = field(default=None)
    

@dataclass
class GetTransactionCostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
