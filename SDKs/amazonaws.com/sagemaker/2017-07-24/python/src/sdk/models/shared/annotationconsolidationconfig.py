from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AnnotationConsolidationConfig:
    r"""AnnotationConsolidationConfig
    Configures how labels are consolidated across human workers and processes output data. 
    """
    
    annotation_consolidation_lambda_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnnotationConsolidationLambdaArn') }})
    
