from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import channeldefinition
from . import media
from . import callanalyticsjobsettings


@dataclass_json
@dataclass
class StartCallAnalyticsJobRequest:
    call_analytics_job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CallAnalyticsJobName' }})
    channel_definitions: Optional[List[channeldefinition.ChannelDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelDefinitions' }})
    data_access_role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataAccessRoleArn' }})
    media: media.Media = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Media' }})
    output_encryption_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputEncryptionKMSKeyId' }})
    output_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputLocation' }})
    settings: Optional[callanalyticsjobsettings.CallAnalyticsJobSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Settings' }})
    
