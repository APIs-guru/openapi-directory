from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UserDefinedFieldsGetResponse:
    content_type: str = field()
    status_code: int = field()
    page_result_user_defined_field_dto_: Optional[shared.PageResultUserDefinedFieldDto] = field(default=None)
    
