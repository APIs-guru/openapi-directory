from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Workforce:
    r"""Workforce
    A single private workforce, which is automatically created when you create your first private work team. You can create one private work force in each Amazon Web Services Region. By default, any workforce-related API operation used in a specific region will apply to the workforce created in that region. To learn how to create a private workforce, see <a href=\"https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html\">Create a Private Workforce</a>.
    """
    
    workforce_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkforceArn') }})
    workforce_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkforceName') }})
    cognito_config: Optional[CognitoConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CognitoConfig') }})
    create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdatedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    oidc_config: Optional[OidcConfigForResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OidcConfig') }})
    source_ip_config: Optional[SourceIPConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceIpConfig') }})
    sub_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubDomain') }})
    
