from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import connectionerrorcodetype_enum
from . import connectionstatetype_enum


@dataclass_json
@dataclass
class CustomKeyStoresListEntry:
    cloud_hsm_cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudHsmClusterId' }})
    connection_error_code: Optional[connectionerrorcodetype_enum.ConnectionErrorCodeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionErrorCode' }})
    connection_state: Optional[connectionstatetype_enum.ConnectionStateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionState' }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_key_store_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomKeyStoreId' }})
    custom_key_store_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomKeyStoreName' }})
    trust_anchor_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrustAnchorCertificate' }})
    
