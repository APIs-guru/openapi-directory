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
class ImportKeyMaterialRequest:
    encrypted_key_material: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptedKeyMaterial') }})
    import_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImportToken') }})
    key_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    expiration_model: Optional[ExpirationModelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpirationModel') }})
    valid_to: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidTo'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
