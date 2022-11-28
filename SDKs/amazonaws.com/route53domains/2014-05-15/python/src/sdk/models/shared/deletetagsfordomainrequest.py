from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteTagsForDomainRequest:
    r"""DeleteTagsForDomainRequest
    The DeleteTagsForDomainRequest includes the following elements.
    """
    
    domain_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    tags_to_delete: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagsToDelete') }})
    
