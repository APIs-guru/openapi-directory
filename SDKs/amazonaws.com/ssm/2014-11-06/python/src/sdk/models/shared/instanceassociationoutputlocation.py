from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstanceAssociationOutputLocation:
    r"""InstanceAssociationOutputLocation
    <p>An S3 bucket where you want to store the results of this request.</p> <p>For the minimal permissions required to enable Amazon S3 output for an association, see <a href=\"https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-state-assoc.html\">Creating associations</a> in the <i>Systems Manager User Guide</i>. </p>
    """
    
    s3_location: Optional[S3OutputLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Location') }})
    
