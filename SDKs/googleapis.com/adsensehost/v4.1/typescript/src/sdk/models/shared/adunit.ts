import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AdStyle } from "./adstyle";


// AdUnitContentAdsSettingsBackupOption
/** 
 * The backup option to be used in instances where no ad is available.
**/
export class AdUnitContentAdsSettingsBackupOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


// AdUnitContentAdsSettings
/** 
 * Settings specific to content ads (AFC) and highend mobile content ads (AFMC - deprecated).
**/
export class AdUnitContentAdsSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=backupOption" })
  backupOption?: AdUnitContentAdsSettingsBackupOption;

  @Metadata({ data: "json, name=size" })
  size?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


// AdUnitMobileContentAdsSettings
/** 
 * Settings specific to WAP mobile content ads (AFMC - deprecated).
**/
export class AdUnitMobileContentAdsSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=markupLanguage" })
  markupLanguage?: string;

  @Metadata({ data: "json, name=scriptingLanguage" })
  scriptingLanguage?: string;

  @Metadata({ data: "json, name=size" })
  size?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class AdUnit extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=contentAdsSettings" })
  contentAdsSettings?: AdUnitContentAdsSettings;

  @Metadata({ data: "json, name=customStyle" })
  customStyle?: AdStyle;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=mobileContentAdsSettings" })
  mobileContentAdsSettings?: AdUnitMobileContentAdsSettings;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
