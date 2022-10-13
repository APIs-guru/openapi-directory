from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SSHPublicKey:
    date_imported: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DateImported', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ssh_public_key_body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SshPublicKeyBody' }})
    ssh_public_key_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SshPublicKeyId' }})
    
