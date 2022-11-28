from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetServersResponse:
    last_modified_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    server_catalog_status: Optional[ServerCatalogStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverCatalogStatus') }})
    server_list: Optional[List[Server]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverList') }})
    
