from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import customermasterkeyspec_enum
from . import encryptionalgorithmspec_enum
from . import keyspec_enum
from . import keyusagetype_enum
from . import signingalgorithmspec_enum


@dataclass_json
@dataclass
class GetPublicKeyResponse:
    customer_master_key_spec: Optional[customermasterkeyspec_enum.CustomerMasterKeySpecEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomerMasterKeySpec' }})
    encryption_algorithms: Optional[List[encryptionalgorithmspec_enum.EncryptionAlgorithmSpecEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionAlgorithms' }})
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyId' }})
    key_spec: Optional[keyspec_enum.KeySpecEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeySpec' }})
    key_usage: Optional[keyusagetype_enum.KeyUsageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyUsage' }})
    public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PublicKey' }})
    signing_algorithms: Optional[List[signingalgorithmspec_enum.SigningAlgorithmSpecEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SigningAlgorithms' }})
    
