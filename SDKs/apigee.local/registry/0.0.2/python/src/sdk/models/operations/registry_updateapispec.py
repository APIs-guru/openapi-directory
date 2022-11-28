from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class RegistryUpdateAPISpecPathParams:
    api: str = field(metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    spec: str = field(metadata={'path_param': { 'field_name': 'spec', 'style': 'simple', 'explode': False }})
    version: str = field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryUpdateAPISpecQueryParams:
    allow_missing: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'allow_missing', 'style': 'form', 'explode': True }})
    update_mask: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'update_mask', 'style': 'form', 'explode': True }})
    

@dataclass
class RegistryUpdateAPISpecRequest:
    path_params: RegistryUpdateAPISpecPathParams = field()
    query_params: RegistryUpdateAPISpecQueryParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegistryUpdateAPISpecResponse:
    content_type: str = field()
    status_code: int = field()
    api_spec: Optional[Any] = field(default=None)
    
