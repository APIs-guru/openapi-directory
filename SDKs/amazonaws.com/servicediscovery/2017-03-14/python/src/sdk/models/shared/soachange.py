from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SoaChange:
    r"""SoaChange
    Updated Start of Authority (SOA) properties for a public or private DNS namespace.
    """
    
    ttl: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TTL') }})
    
