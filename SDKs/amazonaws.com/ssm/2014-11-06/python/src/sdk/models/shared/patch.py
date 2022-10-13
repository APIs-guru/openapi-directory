from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Patch:
    advisory_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdvisoryIds' }})
    arch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arch' }})
    bugzilla_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BugzillaIds' }})
    cve_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CVEIds' }})
    classification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Classification' }})
    content_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentUrl' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    epoch: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Epoch' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    kb_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KbNumber' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Language' }})
    msrc_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MsrcNumber' }})
    msrc_severity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MsrcSeverity' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    product: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Product' }})
    product_family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductFamily' }})
    release: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Release' }})
    release_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReleaseDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Repository' }})
    severity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Severity' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Title' }})
    vendor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Vendor' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
