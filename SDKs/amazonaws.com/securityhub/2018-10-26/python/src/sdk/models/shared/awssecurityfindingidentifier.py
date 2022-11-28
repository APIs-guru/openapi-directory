from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsSecurityFindingIdentifier:
    r"""AwsSecurityFindingIdentifier
    Identifies a finding to update using <code>BatchUpdateFindings</code>.
    """
    
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    product_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductArn') }})
    
