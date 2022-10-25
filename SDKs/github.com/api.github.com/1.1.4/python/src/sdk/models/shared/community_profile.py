from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CommunityProfileFilesCodeOfConductSimple:
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class CommunityProfileFilesCommunityHealthFile:
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class CommunityProfileFilesLicenseSimple:
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    spdx_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spdx_id' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class CommunityProfileFiles:
    code_of_conduct: CommunityProfileFilesCodeOfConductSimple = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code_of_conduct' }})
    contributing: CommunityProfileFilesCommunityHealthFile = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contributing' }})
    issue_template: CommunityProfileFilesCommunityHealthFile = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issue_template' }})
    license: CommunityProfileFilesLicenseSimple = field(default=None, metadata={'dataclasses_json': { 'field_name': 'license' }})
    pull_request_template: CommunityProfileFilesCommunityHealthFile = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pull_request_template' }})
    readme: CommunityProfileFilesCommunityHealthFile = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readme' }})
    

@dataclass_json
@dataclass
class CommunityProfile:
    content_reports_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content_reports_enabled' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    documentation: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation' }})
    files: CommunityProfileFiles = field(default=None, metadata={'dataclasses_json': { 'field_name': 'files' }})
    health_percentage: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'health_percentage' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
