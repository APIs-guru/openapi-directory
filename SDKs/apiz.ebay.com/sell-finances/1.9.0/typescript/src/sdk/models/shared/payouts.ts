import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Payout } from "./payout";



// Payouts
/** 
 * This type is the base response type of the getPayouts method, and contains an array of one or more payouts (that match the input criteria), the total count of payouts in the response, and various pagination data for the results set.
**/
export class Payouts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=payouts", elemType: Payout })
  payouts?: Payout[];

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
