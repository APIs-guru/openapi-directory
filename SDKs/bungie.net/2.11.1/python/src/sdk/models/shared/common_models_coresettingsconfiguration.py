from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class CommonModelsCoreSettingsConfiguration:
    clan_banner_decal_colors: Optional[List[CommonModelsCoreSetting]] = field(default=None)
    clan_banner_decals: Optional[List[CommonModelsCoreSetting]] = field(default=None)
    clan_banner_gonfalon_colors: Optional[List[CommonModelsCoreSetting]] = field(default=None)
    clan_banner_gonfalon_detail_colors: Optional[List[CommonModelsCoreSetting]] = field(default=None)
    clan_banner_gonfalon_details: Optional[List[CommonModelsCoreSetting]] = field(default=None)
    clan_banner_gonfalons: Optional[List[CommonModelsCoreSetting]] = field(default=None)
    clan_banner_standards: Optional[List[CommonModelsCoreSetting]] = field(default=None)
    destiny2_core_settings: Optional[CommonModelsDestiny2CoreSettings] = field(default=None)
    destiny_membership_types: Optional[List[CommonModelsCoreSetting]] = field(default=None)
    email_settings: Optional[UserEmailSettings] = field(default=None)
    environment: Optional[str] = field(default=None)
    fireteam_activities: Optional[List[CommonModelsCoreSetting]] = field(default=None)
    forum_categories: Optional[List[CommonModelsCoreSetting]] = field(default=None)
    group_avatars: Optional[List[CommonModelsCoreSetting]] = field(default=None)
    ignore_reasons: Optional[List[CommonModelsCoreSetting]] = field(default=None)
    recruitment_activities: Optional[List[CommonModelsCoreSetting]] = field(default=None)
    recruitment_misc_tags: Optional[List[CommonModelsCoreSetting]] = field(default=None)
    recruitment_platform_tags: Optional[List[CommonModelsCoreSetting]] = field(default=None)
    system_content_locales: Optional[List[CommonModelsCoreSetting]] = field(default=None)
    systems: Optional[dict[str, CommonModelsCoreSystem]] = field(default=None)
    user_content_locales: Optional[List[CommonModelsCoreSetting]] = field(default=None)
    
