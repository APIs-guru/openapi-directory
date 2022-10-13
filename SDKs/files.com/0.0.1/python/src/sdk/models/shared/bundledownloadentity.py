from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import bundleregistrationentity

class BundleDownloadEntityDownloadMethodEnum(str, Enum):
    FILE = "file"
    FULL_ZIP = "full_zip"


@dataclass_json
@dataclass
class BundleDownloadEntity:
    bundle_registration: Optional[bundleregistrationentity.BundleRegistrationEntity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bundle_registration' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    download_method: Optional[BundleDownloadEntityDownloadMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download_method' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    
