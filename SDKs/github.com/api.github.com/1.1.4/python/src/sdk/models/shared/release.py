from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import release_asset
from . import simple_user


@dataclass_json
@dataclass
class Release:
    assets: List[release_asset.ReleaseAsset] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    assets_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets_url' }})
    author: simple_user.SimpleUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    body_html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body_html' }})
    body_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body_text' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    draft: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'draft' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    prerelease: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prerelease' }})
    published_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'published_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tag_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag_name' }})
    tarball_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tarball_url' }})
    target_commitish: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_commitish' }})
    upload_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upload_url' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    zipball_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zipball_url' }})
    
