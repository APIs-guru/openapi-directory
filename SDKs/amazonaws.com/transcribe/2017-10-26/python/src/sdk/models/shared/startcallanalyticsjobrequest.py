from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartCallAnalyticsJobRequest:
    call_analytics_job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CallAnalyticsJobName') }})
    data_access_role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataAccessRoleArn') }})
    media: Media = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Media') }})
    channel_definitions: Optional[List[ChannelDefinition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChannelDefinitions') }})
    output_encryption_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputEncryptionKMSKeyId') }})
    output_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputLocation') }})
    settings: Optional[CallAnalyticsJobSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Settings') }})
    
