from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import customermasterkeyspec_enum
from . import encryptionalgorithmspec_enum
from . import expirationmodeltype_enum
from . import keymanagertype_enum
from . import keyspec_enum
from . import keystate_enum
from . import keyusagetype_enum
from . import multiregionconfiguration
from . import origintype_enum
from . import signingalgorithmspec_enum


@dataclass_json
@dataclass
class KeyMetadata:
    aws_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AWSAccountId' }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    cloud_hsm_cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudHsmClusterId' }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_key_store_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomKeyStoreId' }})
    customer_master_key_spec: Optional[customermasterkeyspec_enum.CustomerMasterKeySpecEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomerMasterKeySpec' }})
    deletion_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeletionDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    encryption_algorithms: Optional[List[encryptionalgorithmspec_enum.EncryptionAlgorithmSpecEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionAlgorithms' }})
    expiration_model: Optional[expirationmodeltype_enum.ExpirationModelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpirationModel' }})
    key_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyId' }})
    key_manager: Optional[keymanagertype_enum.KeyManagerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyManager' }})
    key_spec: Optional[keyspec_enum.KeySpecEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeySpec' }})
    key_state: Optional[keystate_enum.KeyStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyState' }})
    key_usage: Optional[keyusagetype_enum.KeyUsageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyUsage' }})
    multi_region: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MultiRegion' }})
    multi_region_configuration: Optional[multiregionconfiguration.MultiRegionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MultiRegionConfiguration' }})
    origin: Optional[origintype_enum.OriginTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Origin' }})
    pending_deletion_window_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PendingDeletionWindowInDays' }})
    signing_algorithms: Optional[List[signingalgorithmspec_enum.SigningAlgorithmSpecEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SigningAlgorithms' }})
    valid_to: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidTo', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
