from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartDocumentAnalysisRequest:
    document_location: DocumentLocation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentLocation') }})
    feature_types: List[FeatureTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureTypes') }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestToken') }})
    job_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobTag') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KMSKeyId') }})
    notification_channel: Optional[NotificationChannel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationChannel') }})
    output_config: Optional[OutputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputConfig') }})
    
