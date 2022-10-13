from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import processingfeaturestoreoutput
from . import processings3output


@dataclass_json
@dataclass
class ProcessingOutput:
    app_managed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppManaged' }})
    feature_store_output: Optional[processingfeaturestoreoutput.ProcessingFeatureStoreOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeatureStoreOutput' }})
    output_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputName' }})
    s3_output: Optional[processings3output.ProcessingS3Output] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Output' }})
    
