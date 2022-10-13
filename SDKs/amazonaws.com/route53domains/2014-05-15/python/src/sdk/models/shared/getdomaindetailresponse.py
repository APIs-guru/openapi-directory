from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import contactdetail
from . import nameserver
from . import contactdetail
from . import contactdetail


@dataclass_json
@dataclass
class GetDomainDetailResponse:
    abuse_contact_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AbuseContactEmail' }})
    abuse_contact_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AbuseContactPhone' }})
    admin_contact: contactdetail.ContactDetail = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdminContact' }})
    admin_privacy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdminPrivacy' }})
    auto_renew: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoRenew' }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dns_sec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsSec' }})
    domain_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainName' }})
    expiration_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpirationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    nameservers: List[nameserver.Nameserver] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Nameservers' }})
    registrant_contact: contactdetail.ContactDetail = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegistrantContact' }})
    registrant_privacy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegistrantPrivacy' }})
    registrar_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegistrarName' }})
    registrar_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegistrarUrl' }})
    registry_domain_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegistryDomainId' }})
    reseller: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reseller' }})
    status_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusList' }})
    tech_contact: contactdetail.ContactDetail = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TechContact' }})
    tech_privacy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TechPrivacy' }})
    updated_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    who_is_server: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WhoIsServer' }})
    
