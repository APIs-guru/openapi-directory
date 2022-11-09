import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PublisherProfileMobileApplicationAppStoreEnum {
    AppStoreTypeUnspecified = "APP_STORE_TYPE_UNSPECIFIED"
,    AppleItunes = "APPLE_ITUNES"
,    GooglePlay = "GOOGLE_PLAY"
,    Roku = "ROKU"
,    AmazonFiretv = "AMAZON_FIRETV"
,    Playstation = "PLAYSTATION"
,    Xbox = "XBOX"
,    SamsungTv = "SAMSUNG_TV"
,    Amazon = "AMAZON"
,    Oppo = "OPPO"
,    Samsung = "SAMSUNG"
,    Vivo = "VIVO"
,    Xiaomi = "XIAOMI"
}


// PublisherProfileMobileApplication
/** 
 * A mobile application that contains a external app ID, name, and app store.
**/
export class PublisherProfileMobileApplication extends SpeakeasyBase {
  @Metadata({ data: "json, name=appStore" })
  appStore?: PublisherProfileMobileApplicationAppStoreEnum;

  @Metadata({ data: "json, name=externalAppId" })
  externalAppId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
