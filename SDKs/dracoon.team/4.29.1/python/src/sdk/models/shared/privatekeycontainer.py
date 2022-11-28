from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PrivateKeyContainer:
    r"""PrivateKeyContainer
    Private key container
    """
    
    private_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateKey') }})
    version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    expire_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class PrivateKeyContainerOutput:
    r"""PrivateKeyContainerOutput
    Private key container
    """
    
    private_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateKey') }})
    version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    
