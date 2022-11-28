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
class RelationalDatabaseSnapshot:
    r"""RelationalDatabaseSnapshot
    Describes a database snapshot.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    engine: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('engine') }})
    engine_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('engineVersion') }})
    from_relational_database_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromRelationalDatabaseArn') }})
    from_relational_database_blueprint_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromRelationalDatabaseBlueprintId') }})
    from_relational_database_bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromRelationalDatabaseBundleId') }})
    from_relational_database_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromRelationalDatabaseName') }})
    location: Optional[ResourceLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_type: Optional[ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    size_in_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeInGb') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    support_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportCode') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
