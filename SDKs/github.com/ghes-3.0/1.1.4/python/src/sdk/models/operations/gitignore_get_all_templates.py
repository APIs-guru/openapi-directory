from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GitignoreGetAllTemplatesResponse:
    content_type: str = field()
    status_code: int = field()
    gitignore_get_all_templates_200_application_json_strings: Optional[List[str]] = field(default=None)
    
