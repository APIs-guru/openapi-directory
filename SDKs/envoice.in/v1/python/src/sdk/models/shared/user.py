from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import externalconnection
from . import usersettings
from . import subscriptionplan

class UserStatusEnum(str, Enum):
    NORMAL = "Normal"
    FRAUDLENT = "Fraudlent"
    LOCKED = "Locked"

class UserTypeEnum(str, Enum):
    ANONYMOUS = "Anonymous"
    CUSTOMER = "Customer"
    SYSTEM_ADMINISTRATOR = "SystemAdministrator"
    COLLABORATOR = "Collaborator"

class UserYearsOfExperienceEnum(str, Enum):
    ONE = "One"
    ONE_TO_THREE = "OneToThree"
    THREE_TO_FIVE = "ThreeToFive"
    SIX_PLUS = "SixPlus"


@dataclass_json
@dataclass
class User:
    action_notifications_last_read_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActionNotificationsLastReadOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Email' }})
    external_connections: Optional[List[externalconnection.ExternalConnection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExternalConnections' }})
    has_been_onboarded: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HasBeenOnboarded' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    is_locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsLocked' }})
    is_verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsVerified' }})
    knowledge_notifications_last_read_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KnowledgeNotificationsLastReadOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_seen_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastSeenOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Password' }})
    password_salt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PasswordSalt' }})
    referral_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReferralPath' }})
    referred_users: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReferredUsers' }})
    referrer_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReferrerKey' }})
    settings: Optional[usersettings.UserSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Settings' }})
    status: Optional[UserStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    subscription_plan: Optional[subscriptionplan.SubscriptionPlan] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubscriptionPlan' }})
    type: Optional[UserTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Username' }})
    verified_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VerifiedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    years_of_experience: Optional[UserYearsOfExperienceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'YearsOfExperience' }})
    
