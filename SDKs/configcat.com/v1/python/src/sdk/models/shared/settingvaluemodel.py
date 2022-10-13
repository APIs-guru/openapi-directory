from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import configmodel
from . import environmentmodel
from . import integrationlinkmodel
from . import rolloutpercentageitemmodel
from . import rolloutrulemodel
from . import settingdatamodel
from . import settingtagmodel


@dataclass_json
@dataclass
class SettingValueModel:
    config: Optional[configmodel.ConfigModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    environment: Optional[environmentmodel.EnvironmentModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    integration_links: Optional[List[integrationlinkmodel.IntegrationLinkModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integrationLinks' }})
    last_updater_user_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdaterUserEmail' }})
    last_updater_user_full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdaterUserFullName' }})
    read_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readOnly' }})
    rollout_percentage_items: Optional[List[rolloutpercentageitemmodel.RolloutPercentageItemModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rolloutPercentageItems' }})
    rollout_rules: Optional[List[rolloutrulemodel.RolloutRuleModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rolloutRules' }})
    setting: Optional[settingdatamodel.SettingDataModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setting' }})
    setting_tags: Optional[List[settingtagmodel.SettingTagModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settingTags' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    value: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
