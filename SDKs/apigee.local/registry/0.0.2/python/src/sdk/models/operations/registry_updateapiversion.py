from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class RegistryUpdateAPIVersionPathParams:
    api: str = field(metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    version: str = field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryUpdateAPIVersionQueryParams:
    update_mask: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'update_mask', 'style': 'form', 'explode': True }})
    

@dataclass
class RegistryUpdateAPIVersionRequest:
    path_params: RegistryUpdateAPIVersionPathParams = field()
    query_params: RegistryUpdateAPIVersionQueryParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegistryUpdateAPIVersionResponse:
    content_type: str = field()
    status_code: int = field()
    api_version: Optional[Any] = field(default=None)
    
