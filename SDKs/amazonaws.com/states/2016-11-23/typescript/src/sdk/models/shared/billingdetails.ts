import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BillingDetails
/** 
 * An object that describes workflow billing details.
**/
export class BillingDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billedDurationInMilliseconds" })
  billedDurationInMilliseconds?: number;

  @SpeakeasyMetadata({ data: "json, name=billedMemoryUsedInMB" })
  billedMemoryUsedInMb?: number;
}
