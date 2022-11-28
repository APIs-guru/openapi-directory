from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NeoVpcConfig:
    r"""NeoVpcConfig
    The <a>VpcConfig</a> configuration object that specifies the VPC that you want the compilation jobs to connect to. For more information on controlling access to your Amazon S3 buckets used for compilation job, see <a href=\"https://docs.aws.amazon.com/sagemaker/latest/dg/neo-vpc.html\">Give Amazon SageMaker Compilation Jobs Access to Resources in Your Amazon VPC</a>.
    """
    
    security_group_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroupIds') }})
    subnets: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subnets') }})
    
