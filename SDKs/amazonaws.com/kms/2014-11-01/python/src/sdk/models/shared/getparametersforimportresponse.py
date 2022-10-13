from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetParametersForImportResponse:
    import_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImportToken' }})
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyId' }})
    parameters_valid_to: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParametersValidTo', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PublicKey' }})
    
