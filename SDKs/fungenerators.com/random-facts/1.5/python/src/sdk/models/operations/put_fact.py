from dataclasses import dataclass, field



@dataclass
class PutFactQueryParams:
    category: str = field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    fact: str = field(default=None, metadata={'query_param': { 'field_name': 'fact', 'style': 'form', 'explode': True }})
    subcategory: str = field(default=None, metadata={'query_param': { 'field_name': 'subcategory', 'style': 'form', 'explode': True }})
    tags: str = field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    

@dataclass
class PutFactSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PutFactRequest:
    query_params: PutFactQueryParams = field(default=None)
    security: PutFactSecurity = field(default=None)
    

@dataclass
class PutFactResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
