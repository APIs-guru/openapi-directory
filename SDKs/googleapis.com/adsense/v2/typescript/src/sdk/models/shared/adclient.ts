import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AdClientStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Ready = "READY"
,    GettingReady = "GETTING_READY"
,    RequiresReview = "REQUIRES_REVIEW"
}


// AdClient
/** 
 * Representation of an ad client. An ad client represents a user's subscription with a specific AdSense product.
**/
export class AdClient extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=productCode" })
  productCode?: string;

  @Metadata({ data: "json, name=reportingDimensionId" })
  reportingDimensionId?: string;

  @Metadata({ data: "json, name=state" })
  state?: AdClientStateEnum;
}
