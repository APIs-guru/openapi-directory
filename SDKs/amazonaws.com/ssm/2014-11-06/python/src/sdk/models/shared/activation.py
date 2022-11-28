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
class Activation:
    r"""Activation
    An activation registers one or more on-premises servers or virtual machines (VMs) with Amazon Web Services so that you can configure those servers or VMs using Run Command. A server or VM that has been registered with Amazon Web Services Systems Manager is called a managed instance.
    """
    
    activation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActivationId') }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_instance_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultInstanceName') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    expiration_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpirationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    expired: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Expired') }})
    iam_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IamRole') }})
    registration_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegistrationLimit') }})
    registrations_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegistrationsCount') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
