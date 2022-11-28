import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AdClientStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Ready = "READY",
    GettingReady = "GETTING_READY",
    RequiresReview = "REQUIRES_REVIEW"
}


// AdClient
/** 
 * Representation of an ad client. An ad client represents a user's subscription with a specific AdSense product.
**/
export class AdClient extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=productCode" })
  productCode?: string;

  @SpeakeasyMetadata({ data: "json, name=reportingDimensionId" })
  reportingDimensionId?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: AdClientStateEnum;
}
