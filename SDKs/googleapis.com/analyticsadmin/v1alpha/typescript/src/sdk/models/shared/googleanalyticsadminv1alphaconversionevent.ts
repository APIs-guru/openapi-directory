import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAnalyticsAdminV1alphaConversionEvent
/** 
 * A conversion event in a Google Analytics property.
**/
export class GoogleAnalyticsAdminV1alphaConversionEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=custom" })
  custom?: boolean;

  @Metadata({ data: "json, name=deletable" })
  deletable?: boolean;

  @Metadata({ data: "json, name=eventName" })
  eventName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
