from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Ec2AmiResource:
    r"""Ec2AmiResource
    A JSON-formatted object that contains the IDs for an Amazon Machine Image (AMI), including the Amazon EC2 AMI ID and the Snow device AMI ID. Each AMI has these two IDs to simplify identifying the AMI in both the AWS Cloud and on the device.
    """
    
    ami_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AmiId') }})
    snowball_ami_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnowballAmiId') }})
    
