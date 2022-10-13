from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inputdataconfig
from . import outputdataconfig


@dataclass_json
@dataclass
class StartTextTranslationJobRequest:
    client_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientToken' }})
    data_access_role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataAccessRoleArn' }})
    input_data_config: inputdataconfig.InputDataConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputDataConfig' }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobName' }})
    output_data_config: outputdataconfig.OutputDataConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputDataConfig' }})
    parallel_data_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParallelDataNames' }})
    source_language_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceLanguageCode' }})
    target_language_codes: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetLanguageCodes' }})
    terminology_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TerminologyNames' }})
    
