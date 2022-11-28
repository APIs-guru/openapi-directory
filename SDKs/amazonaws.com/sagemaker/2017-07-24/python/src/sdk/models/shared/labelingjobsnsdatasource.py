from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LabelingJobSnsDataSource:
    r"""LabelingJobSnsDataSource
    An Amazon SNS data source used for streaming labeling jobs.
    """
    
    sns_topic_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnsTopicArn') }})
    
