import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamDataInput } from "./googleanalyticsadminv1alphadatastreamandroidappstreamdata";
import { GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamDataInput } from "./googleanalyticsadminv1alphadatastreamiosappstreamdata";
import { GoogleAnalyticsAdminV1alphaDataStreamWebStreamDataInput } from "./googleanalyticsadminv1alphadatastreamwebstreamdata";
import { GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamData } from "./googleanalyticsadminv1alphadatastreamandroidappstreamdata";
import { GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamData } from "./googleanalyticsadminv1alphadatastreamiosappstreamdata";
import { GoogleAnalyticsAdminV1alphaDataStreamWebStreamData } from "./googleanalyticsadminv1alphadatastreamwebstreamdata";


export enum GoogleAnalyticsAdminV1alphaDataStreamTypeEnum {
    DataStreamTypeUnspecified = "DATA_STREAM_TYPE_UNSPECIFIED",
    WebDataStream = "WEB_DATA_STREAM",
    AndroidAppDataStream = "ANDROID_APP_DATA_STREAM",
    IosAppDataStream = "IOS_APP_DATA_STREAM"
}


// GoogleAnalyticsAdminV1alphaDataStreamInput
/** 
 * A resource message representing a data stream.
**/
export class GoogleAnalyticsAdminV1alphaDataStreamInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=androidAppStreamData" })
  androidAppStreamData?: GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamDataInput;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=iosAppStreamData" })
  iosAppStreamData?: GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamDataInput;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleAnalyticsAdminV1alphaDataStreamTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=webStreamData" })
  webStreamData?: GoogleAnalyticsAdminV1alphaDataStreamWebStreamDataInput;
}


// GoogleAnalyticsAdminV1alphaDataStream
/** 
 * A resource message representing a data stream.
**/
export class GoogleAnalyticsAdminV1alphaDataStream extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=androidAppStreamData" })
  androidAppStreamData?: GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamData;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=iosAppStreamData" })
  iosAppStreamData?: GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamData;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleAnalyticsAdminV1alphaDataStreamTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=webStreamData" })
  webStreamData?: GoogleAnalyticsAdminV1alphaDataStreamWebStreamData;
}
