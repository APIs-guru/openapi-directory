from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import applicationdatatransfer


@dataclass_json
@dataclass
class DataTransfer:
    application_data_transfers: Optional[List[applicationdatatransfer.ApplicationDataTransfer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationDataTransfers' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    new_owner_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newOwnerUserId' }})
    old_owner_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oldOwnerUserId' }})
    overall_transfer_status_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overallTransferStatusCode' }})
    request_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
