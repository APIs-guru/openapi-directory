from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import authorizationprovidertype_enum


@dataclass_json
@dataclass
class WebsiteAuthorizationProviderSummary:
    authorization_provider_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthorizationProviderId' }})
    authorization_provider_type: authorizationprovidertype_enum.AuthorizationProviderTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthorizationProviderType' }})
    created_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainName' }})
    
