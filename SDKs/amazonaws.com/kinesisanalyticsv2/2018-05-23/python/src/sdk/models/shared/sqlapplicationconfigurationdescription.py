from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inputdescription
from . import outputdescription
from . import referencedatasourcedescription


@dataclass_json
@dataclass
class SQLApplicationConfigurationDescription:
    input_descriptions: Optional[List[inputdescription.InputDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputDescriptions' }})
    output_descriptions: Optional[List[outputdescription.OutputDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputDescriptions' }})
    reference_data_source_descriptions: Optional[List[referencedatasourcedescription.ReferenceDataSourceDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReferenceDataSourceDescriptions' }})
    
