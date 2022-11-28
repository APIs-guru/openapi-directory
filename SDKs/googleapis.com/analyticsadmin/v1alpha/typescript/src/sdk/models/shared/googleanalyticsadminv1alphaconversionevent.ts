import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAnalyticsAdminV1alphaConversionEvent
/** 
 * A conversion event in a Google Analytics property.
**/
export class GoogleAnalyticsAdminV1alphaConversionEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=custom" })
  custom?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deletable" })
  deletable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=eventName" })
  eventName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// GoogleAnalyticsAdminV1alphaConversionEventInput
/** 
 * A conversion event in a Google Analytics property.
**/
export class GoogleAnalyticsAdminV1alphaConversionEventInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventName" })
  eventName?: string;
}
