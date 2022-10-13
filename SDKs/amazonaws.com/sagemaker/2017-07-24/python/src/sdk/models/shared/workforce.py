from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import cognitoconfig
from . import oidcconfigforresponse
from . import sourceipconfig


@dataclass_json
@dataclass
class Workforce:
    cognito_config: Optional[cognitoconfig.CognitoConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CognitoConfig' }})
    create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    oidc_config: Optional[oidcconfigforresponse.OidcConfigForResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OidcConfig' }})
    source_ip_config: Optional[sourceipconfig.SourceIPConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceIpConfig' }})
    sub_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubDomain' }})
    workforce_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkforceArn' }})
    workforce_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkforceName' }})
    
