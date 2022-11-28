from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SoftwareVersionData:
    r"""SoftwareVersionData
    Software version information
    """
    
    build_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    rest_api_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('restApiVersion') }})
    scm_revision_number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scmRevisionNumber') }})
    sds_server_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sdsServerVersion') }})
    is_dracoon_cloud: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDracoonCloud') }})
    
