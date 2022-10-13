from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import expirationmodeltype_enum


@dataclass_json
@dataclass
class ImportKeyMaterialRequest:
    encrypted_key_material: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptedKeyMaterial' }})
    expiration_model: Optional[expirationmodeltype_enum.ExpirationModelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpirationModel' }})
    import_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImportToken' }})
    key_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyId' }})
    valid_to: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidTo', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
