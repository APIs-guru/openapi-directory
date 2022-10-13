from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cloudwatchloggingoptionupdate
from . import inputupdate
from . import outputupdate
from . import referencedatasourceupdate


@dataclass_json
@dataclass
class ApplicationUpdate:
    application_code_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationCodeUpdate' }})
    cloud_watch_logging_option_updates: Optional[List[cloudwatchloggingoptionupdate.CloudWatchLoggingOptionUpdate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLoggingOptionUpdates' }})
    input_updates: Optional[List[inputupdate.InputUpdate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputUpdates' }})
    output_updates: Optional[List[outputupdate.OutputUpdate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputUpdates' }})
    reference_data_source_updates: Optional[List[referencedatasourceupdate.ReferenceDataSourceUpdate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReferenceDataSourceUpdates' }})
    
