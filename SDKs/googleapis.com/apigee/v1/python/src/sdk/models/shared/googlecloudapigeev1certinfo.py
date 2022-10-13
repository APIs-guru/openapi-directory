from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudApigeeV1CertInfo:
    basic_constraints: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basicConstraints' }})
    expiry_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiryDate' }})
    is_valid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isValid' }})
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuer' }})
    public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicKey' }})
    serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serialNumber' }})
    sig_alg_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sigAlgName' }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subject' }})
    subject_alternative_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subjectAlternativeNames' }})
    valid_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validFrom' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
