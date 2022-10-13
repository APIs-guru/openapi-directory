from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awslambdafunctionenvironmenterror


@dataclass_json
@dataclass
class AwsLambdaFunctionEnvironment:
    error: Optional[awslambdafunctionenvironmenterror.AwsLambdaFunctionEnvironmentError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Error' }})
    variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Variables' }})
    
