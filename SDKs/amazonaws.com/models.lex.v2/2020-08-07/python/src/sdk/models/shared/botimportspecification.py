from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dataprivacy


@dataclass_json
@dataclass
class BotImportSpecification:
    bot_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botName' }})
    bot_tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botTags' }})
    data_privacy: dataprivacy.DataPrivacy = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataPrivacy' }})
    idle_session_ttl_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idleSessionTTLInSeconds' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    test_bot_alias_tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testBotAliasTags' }})
    
