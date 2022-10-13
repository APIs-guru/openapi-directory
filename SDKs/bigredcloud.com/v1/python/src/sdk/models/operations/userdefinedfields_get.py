from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UserDefinedFieldsGetResponse:
    content_type: str = field(default=None)
    page_result_user_defined_field_dto_: Optional[shared.PageResultUserDefinedFieldDto] = field(default=None)
    status_code: int = field(default=None)
    
