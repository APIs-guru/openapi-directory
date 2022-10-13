from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OwnerTypeGroupsGetResponse:
    content_type: str = field(default=None)
    page_result_owner_type_group_dto_: Optional[shared.PageResultOwnerTypeGroupDto] = field(default=None)
    status_code: int = field(default=None)
    
