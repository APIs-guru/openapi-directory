from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import referencedatasourcedescription


@dataclass_json
@dataclass
class AddApplicationReferenceDataSourceResponse:
    application_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationARN' }})
    application_version_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationVersionId' }})
    reference_data_source_descriptions: Optional[List[referencedatasourcedescription.ReferenceDataSourceDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReferenceDataSourceDescriptions' }})
    
