from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import dkimattributes
from . import identitytype_enum
from . import mailfromattributes
from . import tag


@dataclass_json
@dataclass
class GetEmailIdentityResponse:
    configuration_set_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationSetName' }})
    dkim_attributes: Optional[dkimattributes.DkimAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DkimAttributes' }})
    feedback_forwarding_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeedbackForwardingStatus' }})
    identity_type: Optional[identitytype_enum.IdentityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityType' }})
    mail_from_attributes: Optional[mailfromattributes.MailFromAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MailFromAttributes' }})
    policies: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Policies' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    verified_for_sending_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VerifiedForSendingStatus' }})
    
