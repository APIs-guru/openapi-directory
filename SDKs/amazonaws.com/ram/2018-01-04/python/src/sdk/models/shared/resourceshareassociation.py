from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResourceShareAssociation:
    r"""ResourceShareAssociation
    Describes an association with a resource share.
    """
    
    associated_entity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associatedEntity') }})
    association_type: Optional[ResourceShareAssociationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associationType') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    external: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external') }})
    last_updated_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    resource_share_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceShareArn') }})
    resource_share_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceShareName') }})
    status: Optional[ResourceShareAssociationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusMessage') }})
    
