import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CommonModelsCoreSetting } from "./commonmodelscoresetting";
import { CommonModelsDestiny2CoreSettings } from "./commonmodelsdestiny2coresettings";
import { UserEmailSettings } from "./useremailsettings";
import { CommonModelsCoreSystem } from "./commonmodelscoresystem";



export class CommonModelsCoreSettingsConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CommonModelsCoreSetting })
  clanBannerDecalColors?: CommonModelsCoreSetting[];

  @SpeakeasyMetadata({ elemType: CommonModelsCoreSetting })
  clanBannerDecals?: CommonModelsCoreSetting[];

  @SpeakeasyMetadata({ elemType: CommonModelsCoreSetting })
  clanBannerGonfalonColors?: CommonModelsCoreSetting[];

  @SpeakeasyMetadata({ elemType: CommonModelsCoreSetting })
  clanBannerGonfalonDetailColors?: CommonModelsCoreSetting[];

  @SpeakeasyMetadata({ elemType: CommonModelsCoreSetting })
  clanBannerGonfalonDetails?: CommonModelsCoreSetting[];

  @SpeakeasyMetadata({ elemType: CommonModelsCoreSetting })
  clanBannerGonfalons?: CommonModelsCoreSetting[];

  @SpeakeasyMetadata({ elemType: CommonModelsCoreSetting })
  clanBannerStandards?: CommonModelsCoreSetting[];

  @SpeakeasyMetadata()
  destiny2CoreSettings?: CommonModelsDestiny2CoreSettings;

  @SpeakeasyMetadata({ elemType: CommonModelsCoreSetting })
  destinyMembershipTypes?: CommonModelsCoreSetting[];

  @SpeakeasyMetadata()
  emailSettings?: UserEmailSettings;

  @SpeakeasyMetadata()
  environment?: string;

  @SpeakeasyMetadata({ elemType: CommonModelsCoreSetting })
  fireteamActivities?: CommonModelsCoreSetting[];

  @SpeakeasyMetadata({ elemType: CommonModelsCoreSetting })
  forumCategories?: CommonModelsCoreSetting[];

  @SpeakeasyMetadata({ elemType: CommonModelsCoreSetting })
  groupAvatars?: CommonModelsCoreSetting[];

  @SpeakeasyMetadata({ elemType: CommonModelsCoreSetting })
  ignoreReasons?: CommonModelsCoreSetting[];

  @SpeakeasyMetadata({ elemType: CommonModelsCoreSetting })
  recruitmentActivities?: CommonModelsCoreSetting[];

  @SpeakeasyMetadata({ elemType: CommonModelsCoreSetting })
  recruitmentMiscTags?: CommonModelsCoreSetting[];

  @SpeakeasyMetadata({ elemType: CommonModelsCoreSetting })
  recruitmentPlatformTags?: CommonModelsCoreSetting[];

  @SpeakeasyMetadata({ elemType: CommonModelsCoreSetting })
  systemContentLocales?: CommonModelsCoreSetting[];

  @SpeakeasyMetadata({ elemType: CommonModelsCoreSystem })
  systems?: Map<string, CommonModelsCoreSystem>;

  @SpeakeasyMetadata({ elemType: CommonModelsCoreSetting })
  userContentLocales?: CommonModelsCoreSetting[];
}
