from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LicenseContentLinks:
    git: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('git') }})
    html: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html') }})
    self: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclass
class LicenseContentLicenseSimple:
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    spdx_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spdx_id') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    

@dataclass_json
@dataclass
class LicenseContent:
    r"""LicenseContent
    License Content
    """
    
    links: LicenseContentLinks = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    content: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    download_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('download_url') }})
    encoding: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('encoding') }})
    git_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('git_url') }})
    html_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    license: LicenseContentLicenseSimple = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    sha: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    size: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
