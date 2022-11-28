from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFormFieldSetsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFormFieldSetsIDRequest:
    path_params: GetFormFieldSetsIDPathParams = field()
    

@dataclass
class GetFormFieldSetsIDResponse:
    content_type: str = field()
    status_code: int = field()
    form_field_set_entity: Optional[shared.FormFieldSetEntity] = field(default=None)
    
