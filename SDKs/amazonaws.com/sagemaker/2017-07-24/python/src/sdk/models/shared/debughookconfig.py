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
class DebugHookConfig:
    r"""DebugHookConfig
    Configuration information for the Debugger hook parameters, metric and tensor collections, and storage paths. To learn more about how to configure the <code>DebugHookConfig</code> parameter, see <a href=\"https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html\">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.
    """
    
    s3_output_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3OutputPath') }})
    collection_configurations: Optional[List[CollectionConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CollectionConfigurations') }})
    hook_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HookParameters') }})
    local_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalPath') }})
    
