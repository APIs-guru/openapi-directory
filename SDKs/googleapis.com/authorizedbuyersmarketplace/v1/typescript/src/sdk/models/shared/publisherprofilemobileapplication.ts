import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PublisherProfileMobileApplicationAppStoreEnum {
    AppStoreTypeUnspecified = "APP_STORE_TYPE_UNSPECIFIED",
    AppleItunes = "APPLE_ITUNES",
    GooglePlay = "GOOGLE_PLAY",
    Roku = "ROKU",
    AmazonFireTv = "AMAZON_FIRE_TV",
    Playstation = "PLAYSTATION",
    Xbox = "XBOX",
    SamsungTv = "SAMSUNG_TV",
    Amazon = "AMAZON",
    Oppo = "OPPO",
    Samsung = "SAMSUNG",
    Vivo = "VIVO",
    Xiaomi = "XIAOMI"
}


// PublisherProfileMobileApplication
/** 
 * A mobile application that contains a external app ID, name, and app store.
**/
export class PublisherProfileMobileApplication extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appStore" })
  appStore?: PublisherProfileMobileApplicationAppStoreEnum;

  @SpeakeasyMetadata({ data: "json, name=externalAppId" })
  externalAppId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
