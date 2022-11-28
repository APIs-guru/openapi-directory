from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ContentSubmoduleLinks:
    git: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('git') }})
    html: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html') }})
    self: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclass
class ContentSubmodule:
    r"""ContentSubmodule
    An object describing a symlink
    """
    
    links: ContentSubmoduleLinks = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    download_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('download_url') }})
    git_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('git_url') }})
    html_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    sha: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    size: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    submodule_git_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('submodule_git_url') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
