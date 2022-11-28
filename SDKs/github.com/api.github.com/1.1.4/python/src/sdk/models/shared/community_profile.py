from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CommunityProfileFilesCodeOfConductSimple:
    html_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class CommunityProfileFilesCommunityHealthFile:
    html_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class CommunityProfileFilesLicenseSimple:
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    spdx_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spdx_id') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    

@dataclass_json
@dataclass
class CommunityProfileFiles:
    code_of_conduct: CommunityProfileFilesCodeOfConductSimple = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code_of_conduct') }})
    contributing: CommunityProfileFilesCommunityHealthFile = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contributing') }})
    issue_template: CommunityProfileFilesCommunityHealthFile = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('issue_template') }})
    license: CommunityProfileFilesLicenseSimple = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    pull_request_template: CommunityProfileFilesCommunityHealthFile = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pull_request_template') }})
    readme: CommunityProfileFilesCommunityHealthFile = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('readme') }})
    

@dataclass_json
@dataclass
class CommunityProfile:
    r"""CommunityProfile
    Community Profile
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    documentation: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation') }})
    files: CommunityProfileFiles = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    health_percentage: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_percentage') }})
    updated_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    content_reports_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_reports_enabled') }})
    
