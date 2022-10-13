from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IntegrationSettings:
    albacross_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'albacross_id' }})
    automate_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'automate_enabled' }})
    blendr_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blendr_enabled' }})
    combidesk_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'combidesk_enabled' }})
    crisp_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crisp_id' }})
    drift_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'drift_id' }})
    google_analytics_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'google_analytics_id' }})
    google_tag_manager_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'google_tag_manager_id' }})
    heap_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'heap_id' }})
    hubspot_portal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hubspot_portal_id' }})
    integromat_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integromat_enabled' }})
    intercom_app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intercom_app_id' }})
    iubenda_cookie_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iubenda_cookie_policy_id' }})
    iubenda_site_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iubenda_site_id' }})
    journy_io_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'journy_io_domain' }})
    journy_io_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'journy_io_id' }})
    livechat_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'livechat_id' }})
    metomic_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metomic_id' }})
    microsoft_flow_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'microsoft_flow_enabled' }})
    microsoft_flow_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'microsoft_flow_id' }})
    onetrust_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onetrust_id' }})
    piesync_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'piesync_enabled' }})
    segment_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segment_enabled' }})
    segment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segment_id' }})
    tray_io_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tray_io_enabled' }})
    zapier_beta_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zapier_beta_link' }})
    zapier_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zapier_enabled' }})
    zapier_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zapier_id' }})
    
