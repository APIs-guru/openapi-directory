from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetCategoriesJSONResponse:
    content_type: str = field()
    status_code: int = field()
    get_categories_json_200_application_json_any: Optional[Any] = field(default=None)
    
