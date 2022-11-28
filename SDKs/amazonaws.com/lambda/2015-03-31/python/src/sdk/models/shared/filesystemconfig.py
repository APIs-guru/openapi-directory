from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FileSystemConfig:
    r"""FileSystemConfig
    Details about the connection between a Lambda function and an <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/configuration-filesystem.html\">Amazon EFS file system</a>.
    """
    
    arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    local_mount_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalMountPath') }})
    
