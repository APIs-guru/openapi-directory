from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import downloadrequirements
from . import overagedetails
from . import productstatus_enum
from . import producttyperesponse_enum


@dataclass_json
@dataclass
class Product:
    agreement_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agreement_name' }})
    application_website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'application_website' }})
    credits_remaining: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credits_remaining' }})
    download_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download_limit' }})
    download_limit_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download_limit_duration' }})
    download_limit_reset_utc_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download_limit_reset_utc_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    download_requirements: Optional[downloadrequirements.DownloadRequirements] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download_requirements' }})
    downloads_remaining: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downloads_remaining' }})
    expiration_utc_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiration_utc_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    imagepack_resolution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imagepack_resolution' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    overage: Optional[overagedetails.OverageDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overage' }})
    status: Optional[productstatus_enum.ProductStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    team_credits: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team_credits' }})
    type: Optional[producttyperesponse_enum.ProductTypeResponseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
