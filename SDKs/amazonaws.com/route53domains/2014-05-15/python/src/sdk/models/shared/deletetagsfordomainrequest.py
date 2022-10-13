from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteTagsForDomainRequest:
    domain_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainName' }})
    tags_to_delete: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagsToDelete' }})
    
