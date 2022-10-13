from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import samplingtargetdocument
from . import unprocessedstatistics


@dataclass_json
@dataclass
class GetSamplingTargetsResult:
    last_rule_modification: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastRuleModification', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sampling_target_documents: Optional[List[samplingtargetdocument.SamplingTargetDocument]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SamplingTargetDocuments' }})
    unprocessed_statistics: Optional[List[unprocessedstatistics.UnprocessedStatistics]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnprocessedStatistics' }})
    
