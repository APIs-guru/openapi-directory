from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudApigeeV1CertInfo:
    r"""GoogleCloudApigeeV1CertInfo
    X.509 certificate as defined in RFC 5280.
    """
    
    basic_constraints: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicConstraints') }})
    expiry_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiryDate') }})
    is_valid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isValid') }})
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuer') }})
    public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKey') }})
    serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serialNumber') }})
    sig_alg_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sigAlgName') }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject') }})
    subject_alternative_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subjectAlternativeNames') }})
    valid_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validFrom') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
