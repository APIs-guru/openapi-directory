from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class RegistryUpdateProjectPathParams:
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryUpdateProjectQueryParams:
    update_mask: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'update_mask', 'style': 'form', 'explode': True }})
    

@dataclass
class RegistryUpdateProjectRequest:
    path_params: RegistryUpdateProjectPathParams = field()
    query_params: RegistryUpdateProjectQueryParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegistryUpdateProjectResponse:
    content_type: str = field()
    status_code: int = field()
    project: Optional[Any] = field(default=None)
    
