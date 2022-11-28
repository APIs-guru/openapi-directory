from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SSHPublicKey:
    r"""SSHPublicKey
    Provides information about the public Secure Shell (SSH) key that is associated with a user account for the specific file transfer protocol-enabled server (as identified by <code>ServerId</code>). The information returned includes the date the key was imported, the public key contents, and the public key ID. A user can store more than one SSH public key associated with their user name on a specific server.
    """
    
    date_imported: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateImported'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ssh_public_key_body: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SshPublicKeyBody') }})
    ssh_public_key_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SshPublicKeyId') }})
    
