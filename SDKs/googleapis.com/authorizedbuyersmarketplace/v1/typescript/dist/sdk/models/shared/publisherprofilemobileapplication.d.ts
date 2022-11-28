import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PublisherProfileMobileApplicationAppStoreEnum {
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
/**
 * A mobile application that contains a external app ID, name, and app store.
**/
export declare class PublisherProfileMobileApplication extends SpeakeasyBase {
    appStore?: PublisherProfileMobileApplicationAppStoreEnum;
    externalAppId?: string;
    name?: string;
}
