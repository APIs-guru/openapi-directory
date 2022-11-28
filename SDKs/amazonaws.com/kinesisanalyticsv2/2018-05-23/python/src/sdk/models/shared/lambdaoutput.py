from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LambdaOutput:
    r"""LambdaOutput
    When you configure a SQL-based Kinesis Data Analytics application's output, identifies an AWS Lambda function as the destination. You provide the function Amazon Resource Name (ARN) of the Lambda function. 
    """
    
    resource_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceARN') }})
    
