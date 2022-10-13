from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import algorithmimage
from . import defaulthyperparameterranges


@dataclass_json
@dataclass
class Algorithm:
    algorithm_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algorithmArn' }})
    algorithm_image: Optional[algorithmimage.AlgorithmImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algorithmImage' }})
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_hyper_parameter_ranges: Optional[defaulthyperparameterranges.DefaultHyperParameterRanges] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultHyperParameterRanges' }})
    default_hyper_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultHyperParameters' }})
    default_resource_config: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultResourceConfig' }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    training_input_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trainingInputMode' }})
    
