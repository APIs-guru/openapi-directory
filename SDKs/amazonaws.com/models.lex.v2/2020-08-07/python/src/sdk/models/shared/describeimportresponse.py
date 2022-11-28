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
class DescribeImportResponse:
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reasons: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureReasons') }})
    import_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importId') }})
    import_status: Optional[ImportStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importStatus') }})
    imported_resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importedResourceId') }})
    imported_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importedResourceName') }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    merge_strategy: Optional[MergeStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergeStrategy') }})
    resource_specification: Optional[ImportResourceSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceSpecification') }})
    
