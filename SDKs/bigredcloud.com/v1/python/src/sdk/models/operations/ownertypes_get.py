from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OwnerTypesGetResponse:
    content_type: str = field()
    status_code: int = field()
    page_result_owner_type_dto_: Optional[shared.PageResultOwnerTypeDto] = field(default=None)
    
