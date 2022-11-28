from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class KeyMetadata:
    r"""KeyMetadata
    <p>Contains metadata about a KMS key.</p> <p>This data type is used as a response element for the <a>CreateKey</a> and <a>DescribeKey</a> operations.</p>
    """
    
    key_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    aws_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AWSAccountId') }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    cloud_hsm_cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudHsmClusterId') }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_key_store_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomKeyStoreId') }})
    customer_master_key_spec: Optional[CustomerMasterKeySpecEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomerMasterKeySpec') }})
    deletion_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeletionDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    encryption_algorithms: Optional[List[EncryptionAlgorithmSpecEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionAlgorithms') }})
    expiration_model: Optional[ExpirationModelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpirationModel') }})
    key_manager: Optional[KeyManagerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyManager') }})
    key_spec: Optional[KeySpecEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeySpec') }})
    key_state: Optional[KeyStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyState') }})
    key_usage: Optional[KeyUsageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyUsage') }})
    multi_region: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MultiRegion') }})
    multi_region_configuration: Optional[MultiRegionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MultiRegionConfiguration') }})
    origin: Optional[OriginTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Origin') }})
    pending_deletion_window_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PendingDeletionWindowInDays') }})
    signing_algorithms: Optional[List[SigningAlgorithmSpecEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SigningAlgorithms') }})
    valid_to: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidTo'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
