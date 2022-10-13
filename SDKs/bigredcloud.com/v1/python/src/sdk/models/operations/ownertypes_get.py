from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OwnerTypesGetResponse:
    content_type: str = field(default=None)
    page_result_owner_type_dto_: Optional[shared.PageResultOwnerTypeDto] = field(default=None)
    status_code: int = field(default=None)
    
