from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class GetAllApIsQueryParams:
    created_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'createdBy', 'style': 'form', 'explode': True }})
    description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    direction: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    is_public: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'isPublic', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    since: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    summary: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'summary', 'style': 'form', 'explode': True }})
    until: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'until', 'style': 'form', 'explode': True }})
    updated_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'updatedBy', 'style': 'form', 'explode': True }})
    workspace: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'workspace', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAllApIsRequest:
    query_params: GetAllApIsQueryParams = field()
    

@dataclass
class GetAllApIsResponse:
    content_type: str = field()
    status_code: int = field()
    
