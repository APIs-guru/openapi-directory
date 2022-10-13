from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFormFieldSetsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFormFieldSetsIDRequest:
    path_params: GetFormFieldSetsIDPathParams = field(default=None)
    

@dataclass
class GetFormFieldSetsIDResponse:
    content_type: str = field(default=None)
    form_field_set_entity: Optional[shared.FormFieldSetEntity] = field(default=None)
    status_code: int = field(default=None)
    
