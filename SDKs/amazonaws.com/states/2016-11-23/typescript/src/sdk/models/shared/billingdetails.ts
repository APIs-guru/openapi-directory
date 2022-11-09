import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BillingDetails
/** 
 * An object that describes workflow billing details.
**/
export class BillingDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=billedDurationInMilliseconds" })
  billedDurationInMilliseconds?: number;

  @Metadata({ data: "json, name=billedMemoryUsedInMB" })
  billedMemoryUsedInMb?: number;
}
