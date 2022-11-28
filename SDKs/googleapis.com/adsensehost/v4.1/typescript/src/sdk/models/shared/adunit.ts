import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdStyle } from "./adstyle";



// AdUnitContentAdsSettingsBackupOption
/** 
 * The backup option to be used in instances where no ad is available.
**/
export class AdUnitContentAdsSettingsBackupOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


// AdUnitContentAdsSettings
/** 
 * Settings specific to content ads (AFC) and highend mobile content ads (AFMC - deprecated).
**/
export class AdUnitContentAdsSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backupOption" })
  backupOption?: AdUnitContentAdsSettingsBackupOption;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// AdUnitMobileContentAdsSettings
/** 
 * Settings specific to WAP mobile content ads (AFMC - deprecated).
**/
export class AdUnitMobileContentAdsSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=markupLanguage" })
  markupLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=scriptingLanguage" })
  scriptingLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class AdUnit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=contentAdsSettings" })
  contentAdsSettings?: AdUnitContentAdsSettings;

  @SpeakeasyMetadata({ data: "json, name=customStyle" })
  customStyle?: AdStyle;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=mobileContentAdsSettings" })
  mobileContentAdsSettings?: AdUnitMobileContentAdsSettings;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
