from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Release:
    r"""Release
    A release.
    """
    
    assets: List[ReleaseAsset] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets_url') }})
    author: SimpleUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    draft: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('draft') }})
    html_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    prerelease: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prerelease') }})
    published_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('published_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tag_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag_name') }})
    tarball_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tarball_url') }})
    target_commitish: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_commitish') }})
    upload_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload_url') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    zipball_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('zipball_url') }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    body_html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body_html') }})
    body_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body_text') }})
    
