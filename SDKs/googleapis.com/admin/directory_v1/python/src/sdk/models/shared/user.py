from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserInput:
    r"""UserInput
    The Directory API allows you to create and manage your account's users, user aliases, and user Gmail chat profile photos. For more information about common tasks, see the [User Accounts Developer's Guide](/admin-sdk/directory/v1/guides/manage-users.html) and the [User Aliases Developer's Guide](/admin-sdk/directory/v1/guides/manage-user-aliases.html).
    """
    
    addresses: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addresses') }})
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    change_password_at_next_login: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changePasswordAtNextLogin') }})
    custom_schemas: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customSchemas') }})
    emails: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    external_ids: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalIds') }})
    gender: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    hash_function: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hashFunction') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ims: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ims') }})
    include_in_global_address_list: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeInGlobalAddressList') }})
    ip_whitelisted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipWhitelisted') }})
    keywords: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keywords') }})
    languages: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages') }})
    locations: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    name: Optional[UserName] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notes: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    org_unit_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgUnitPath') }})
    organizations: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizations') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    phones: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phones') }})
    posix_accounts: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posixAccounts') }})
    primary_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryEmail') }})
    recovery_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recoveryEmail') }})
    recovery_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recoveryPhone') }})
    relations: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relations') }})
    ssh_public_keys: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sshPublicKeys') }})
    suspended: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspended') }})
    websites: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('websites') }})
    

@dataclass_json
@dataclass
class User:
    r"""User
    The Directory API allows you to create and manage your account's users, user aliases, and user Gmail chat profile photos. For more information about common tasks, see the [User Accounts Developer's Guide](/admin-sdk/directory/v1/guides/manage-users.html) and the [User Aliases Developer's Guide](/admin-sdk/directory/v1/guides/manage-user-aliases.html).
    """
    
    addresses: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addresses') }})
    agreed_to_terms: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agreedToTerms') }})
    aliases: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aliases') }})
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    change_password_at_next_login: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changePasswordAtNextLogin') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_schemas: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customSchemas') }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerId') }})
    deletion_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletionTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    emails: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    external_ids: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalIds') }})
    gender: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    hash_function: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hashFunction') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ims: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ims') }})
    include_in_global_address_list: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeInGlobalAddressList') }})
    ip_whitelisted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipWhitelisted') }})
    is_admin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAdmin') }})
    is_delegated_admin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDelegatedAdmin') }})
    is_enforced_in2_sv: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEnforcedIn2Sv') }})
    is_enrolled_in2_sv: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEnrolledIn2Sv') }})
    is_mailbox_setup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isMailboxSetup') }})
    keywords: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keywords') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    languages: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages') }})
    last_login_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastLoginTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    locations: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    name: Optional[UserName] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    non_editable_aliases: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonEditableAliases') }})
    notes: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    org_unit_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgUnitPath') }})
    organizations: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizations') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    phones: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phones') }})
    posix_accounts: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posixAccounts') }})
    primary_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryEmail') }})
    recovery_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recoveryEmail') }})
    recovery_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recoveryPhone') }})
    relations: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relations') }})
    ssh_public_keys: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sshPublicKeys') }})
    suspended: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspended') }})
    suspension_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspensionReason') }})
    thumbnail_photo_etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnailPhotoEtag') }})
    thumbnail_photo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnailPhotoUrl') }})
    websites: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('websites') }})
    
