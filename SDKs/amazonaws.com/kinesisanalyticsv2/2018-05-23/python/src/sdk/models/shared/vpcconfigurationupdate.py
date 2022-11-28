from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VpcConfigurationUpdate:
    r"""VpcConfigurationUpdate
    Describes updates to the VPC configuration used by the application.
    """
    
    vpc_configuration_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfigurationId') }})
    security_group_id_updates: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroupIdUpdates') }})
    subnet_id_updates: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetIdUpdates') }})
    
