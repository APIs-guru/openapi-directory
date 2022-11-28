from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SearchResult:
    r"""SearchResult
    A search result matching the specified query. You can use sources.debian.org to view the file contents. See https://github.com/Debian/dcs/blob/master/cmd/dcs-web/show/show.go for how to construct a sources.debian.org URL from a search result.
    """
    
    context: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    line: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('line') }})
    package: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('package') }})
    path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    context_after: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context_after') }})
    context_before: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context_before') }})
    
