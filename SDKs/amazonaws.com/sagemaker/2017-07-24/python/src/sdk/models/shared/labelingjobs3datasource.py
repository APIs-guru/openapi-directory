from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LabelingJobS3DataSource:
    r"""LabelingJobS3DataSource
    The Amazon S3 location of the input data objects.
    """
    
    manifest_s3_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ManifestS3Uri') }})
    
