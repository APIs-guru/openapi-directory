import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamData } from "./googleanalyticsadminv1alphadatastreamandroidappstreamdata";
import { GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamData } from "./googleanalyticsadminv1alphadatastreamiosappstreamdata";
import { GoogleAnalyticsAdminV1alphaDataStreamWebStreamData } from "./googleanalyticsadminv1alphadatastreamwebstreamdata";

export enum GoogleAnalyticsAdminV1alphaDataStreamTypeEnum {
    DataStreamTypeUnspecified = "DATA_STREAM_TYPE_UNSPECIFIED"
,    WebDataStream = "WEB_DATA_STREAM"
,    AndroidAppDataStream = "ANDROID_APP_DATA_STREAM"
,    IosAppDataStream = "IOS_APP_DATA_STREAM"
}


// GoogleAnalyticsAdminV1alphaDataStream
/** 
 * A resource message representing a data stream.
**/
export class GoogleAnalyticsAdminV1alphaDataStream extends SpeakeasyBase {
  @Metadata({ data: "json, name=androidAppStreamData" })
  androidAppStreamData?: GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamData;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=iosAppStreamData" })
  iosAppStreamData?: GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamData;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: GoogleAnalyticsAdminV1alphaDataStreamTypeEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=webStreamData" })
  webStreamData?: GoogleAnalyticsAdminV1alphaDataStreamWebStreamData;
}
