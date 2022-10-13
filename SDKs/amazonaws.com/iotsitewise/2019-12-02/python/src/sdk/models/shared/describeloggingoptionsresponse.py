from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import loggingoptions


@dataclass_json
@dataclass
class DescribeLoggingOptionsResponse:
    logging_options: loggingoptions.LoggingOptions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loggingOptions' }})
    
