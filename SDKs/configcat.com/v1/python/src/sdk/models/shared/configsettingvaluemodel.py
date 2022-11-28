from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConfigSettingValueModel:
    integration_links: Optional[List[IntegrationLinkModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationLinks') }})
    last_updater_user_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdaterUserEmail') }})
    last_updater_user_full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdaterUserFullName') }})
    rollout_percentage_items: Optional[List[RolloutPercentageItemModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rolloutPercentageItems') }})
    rollout_rules: Optional[List[RolloutRuleModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rolloutRules') }})
    setting: Optional[SettingDataModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setting') }})
    setting_tags: Optional[List[SettingTagModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settingTags') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    value: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
