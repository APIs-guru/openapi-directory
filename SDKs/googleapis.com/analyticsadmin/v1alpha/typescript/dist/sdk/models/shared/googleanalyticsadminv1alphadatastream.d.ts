import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamDataInput } from "./googleanalyticsadminv1alphadatastreamandroidappstreamdata";
import { GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamDataInput } from "./googleanalyticsadminv1alphadatastreamiosappstreamdata";
import { GoogleAnalyticsAdminV1alphaDataStreamWebStreamDataInput } from "./googleanalyticsadminv1alphadatastreamwebstreamdata";
import { GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamData } from "./googleanalyticsadminv1alphadatastreamandroidappstreamdata";
import { GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamData } from "./googleanalyticsadminv1alphadatastreamiosappstreamdata";
import { GoogleAnalyticsAdminV1alphaDataStreamWebStreamData } from "./googleanalyticsadminv1alphadatastreamwebstreamdata";
export declare enum GoogleAnalyticsAdminV1alphaDataStreamTypeEnum {
    DataStreamTypeUnspecified = "DATA_STREAM_TYPE_UNSPECIFIED",
    WebDataStream = "WEB_DATA_STREAM",
    AndroidAppDataStream = "ANDROID_APP_DATA_STREAM",
    IosAppDataStream = "IOS_APP_DATA_STREAM"
}
/**
 * A resource message representing a data stream.
**/
export declare class GoogleAnalyticsAdminV1alphaDataStreamInput extends SpeakeasyBase {
    androidAppStreamData?: GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamDataInput;
    displayName?: string;
    iosAppStreamData?: GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamDataInput;
    type?: GoogleAnalyticsAdminV1alphaDataStreamTypeEnum;
    webStreamData?: GoogleAnalyticsAdminV1alphaDataStreamWebStreamDataInput;
}
/**
 * A resource message representing a data stream.
**/
export declare class GoogleAnalyticsAdminV1alphaDataStream extends SpeakeasyBase {
    androidAppStreamData?: GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamData;
    createTime?: string;
    displayName?: string;
    iosAppStreamData?: GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamData;
    name?: string;
    type?: GoogleAnalyticsAdminV1alphaDataStreamTypeEnum;
    updateTime?: string;
    webStreamData?: GoogleAnalyticsAdminV1alphaDataStreamWebStreamData;
}
