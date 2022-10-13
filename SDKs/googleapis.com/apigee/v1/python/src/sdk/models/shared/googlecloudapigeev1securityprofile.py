from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1securityprofileenvironment
from . import googlecloudapigeev1securityprofilescoringconfig


@dataclass_json
@dataclass
class GoogleCloudApigeeV1SecurityProfile:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    environments: Optional[List[googlecloudapigeev1securityprofileenvironment.GoogleCloudApigeeV1SecurityProfileEnvironment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environments' }})
    max_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxScore' }})
    min_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minScore' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    revision_create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionCreateTime' }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionId' }})
    revision_publish_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionPublishTime' }})
    revision_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionUpdateTime' }})
    scoring_configs: Optional[List[googlecloudapigeev1securityprofilescoringconfig.GoogleCloudApigeeV1SecurityProfileScoringConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scoringConfigs' }})
    
