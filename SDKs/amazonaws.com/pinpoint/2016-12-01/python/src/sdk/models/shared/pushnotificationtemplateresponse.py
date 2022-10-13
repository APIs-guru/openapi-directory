from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import androidpushnotificationtemplate
from . import apnspushnotificationtemplate
from . import androidpushnotificationtemplate
from . import defaultpushnotificationtemplate
from . import androidpushnotificationtemplate
from . import templatetype_enum


@dataclass_json
@dataclass
class PushNotificationTemplateResponse:
    adm: Optional[androidpushnotificationtemplate.AndroidPushNotificationTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ADM' }})
    apns: Optional[apnspushnotificationtemplate.ApnsPushNotificationTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'APNS' }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    baidu: Optional[androidpushnotificationtemplate.AndroidPushNotificationTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Baidu' }})
    creation_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate' }})
    default: Optional[defaultpushnotificationtemplate.DefaultPushNotificationTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Default' }})
    default_substitutions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultSubstitutions' }})
    gcm: Optional[androidpushnotificationtemplate.AndroidPushNotificationTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GCM' }})
    last_modified_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedDate' }})
    recommender_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecommenderId' }})
    template_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateDescription' }})
    template_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateName' }})
    template_type: templatetype_enum.TemplateTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateType' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
