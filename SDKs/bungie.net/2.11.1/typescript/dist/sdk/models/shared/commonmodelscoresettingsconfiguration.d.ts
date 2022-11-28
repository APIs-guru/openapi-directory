import { SpeakeasyBase } from "../../../internal/utils";
import { CommonModelsCoreSetting } from "./commonmodelscoresetting";
import { CommonModelsDestiny2CoreSettings } from "./commonmodelsdestiny2coresettings";
import { UserEmailSettings } from "./useremailsettings";
import { CommonModelsCoreSystem } from "./commonmodelscoresystem";
export declare class CommonModelsCoreSettingsConfiguration extends SpeakeasyBase {
    clanBannerDecalColors?: CommonModelsCoreSetting[];
    clanBannerDecals?: CommonModelsCoreSetting[];
    clanBannerGonfalonColors?: CommonModelsCoreSetting[];
    clanBannerGonfalonDetailColors?: CommonModelsCoreSetting[];
    clanBannerGonfalonDetails?: CommonModelsCoreSetting[];
    clanBannerGonfalons?: CommonModelsCoreSetting[];
    clanBannerStandards?: CommonModelsCoreSetting[];
    destiny2CoreSettings?: CommonModelsDestiny2CoreSettings;
    destinyMembershipTypes?: CommonModelsCoreSetting[];
    emailSettings?: UserEmailSettings;
    environment?: string;
    fireteamActivities?: CommonModelsCoreSetting[];
    forumCategories?: CommonModelsCoreSetting[];
    groupAvatars?: CommonModelsCoreSetting[];
    ignoreReasons?: CommonModelsCoreSetting[];
    recruitmentActivities?: CommonModelsCoreSetting[];
    recruitmentMiscTags?: CommonModelsCoreSetting[];
    recruitmentPlatformTags?: CommonModelsCoreSetting[];
    systemContentLocales?: CommonModelsCoreSetting[];
    systems?: Map<string, CommonModelsCoreSystem>;
    userContentLocales?: CommonModelsCoreSetting[];
}
