import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SuppressedDestinationSummary } from "./suppresseddestinationsummary";



// ListSuppressedDestinationsResponse
/** 
 * A list of suppressed email addresses.
**/
export class ListSuppressedDestinationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SuppressedDestinationSummaries", elemType: SuppressedDestinationSummary })
  suppressedDestinationSummaries?: SuppressedDestinationSummary[];
}
