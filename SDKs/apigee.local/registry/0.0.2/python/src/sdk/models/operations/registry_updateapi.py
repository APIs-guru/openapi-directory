from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class RegistryUpdateAPIPathParams:
    api: str = field(metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryUpdateAPIQueryParams:
    update_mask: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'update_mask', 'style': 'form', 'explode': True }})
    

@dataclass
class RegistryUpdateAPIRequest:
    path_params: RegistryUpdateAPIPathParams = field()
    query_params: RegistryUpdateAPIQueryParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegistryUpdateAPIResponse:
    content_type: str = field()
    status_code: int = field()
    api: Optional[Any] = field(default=None)
    
