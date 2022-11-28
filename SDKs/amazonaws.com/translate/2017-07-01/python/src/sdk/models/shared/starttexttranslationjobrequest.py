from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartTextTranslationJobRequest:
    client_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    data_access_role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataAccessRoleArn') }})
    input_data_config: InputDataConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputDataConfig') }})
    output_data_config: OutputDataConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputDataConfig') }})
    source_language_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceLanguageCode') }})
    target_language_codes: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetLanguageCodes') }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobName') }})
    parallel_data_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParallelDataNames') }})
    terminology_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TerminologyNames') }})
    
