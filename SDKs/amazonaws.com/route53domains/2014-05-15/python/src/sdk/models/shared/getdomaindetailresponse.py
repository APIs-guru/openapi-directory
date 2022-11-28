from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetDomainDetailResponse:
    r"""GetDomainDetailResponse
    The GetDomainDetail response includes the following elements.
    """
    
    admin_contact: ContactDetail = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdminContact') }})
    domain_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    nameservers: List[Nameserver] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Nameservers') }})
    registrant_contact: ContactDetail = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegistrantContact') }})
    tech_contact: ContactDetail = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TechContact') }})
    abuse_contact_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AbuseContactEmail') }})
    abuse_contact_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AbuseContactPhone') }})
    admin_privacy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdminPrivacy') }})
    auto_renew: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoRenew') }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dns_sec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsSec') }})
    expiration_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpirationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    registrant_privacy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegistrantPrivacy') }})
    registrar_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegistrarName') }})
    registrar_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegistrarUrl') }})
    registry_domain_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegistryDomainId') }})
    reseller: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reseller') }})
    status_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusList') }})
    tech_privacy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TechPrivacy') }})
    updated_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    who_is_server: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WhoIsServer') }})
    
