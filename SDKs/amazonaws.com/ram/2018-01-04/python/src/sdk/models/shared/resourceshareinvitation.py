from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import resourceshareassociation
from . import resourceshareinvitationstatus_enum


@dataclass_json
@dataclass
class ResourceShareInvitation:
    invitation_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invitationTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    receiver_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receiverAccountId' }})
    receiver_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receiverArn' }})
    resource_share_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceShareArn' }})
    resource_share_associations: Optional[List[resourceshareassociation.ResourceShareAssociation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceShareAssociations' }})
    resource_share_invitation_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceShareInvitationArn' }})
    resource_share_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceShareName' }})
    sender_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'senderAccountId' }})
    status: Optional[resourceshareinvitationstatus_enum.ResourceShareInvitationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
