import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SuppressedDestinationSummary } from "./suppresseddestinationsummary";


// ListSuppressedDestinationsResponse
/** 
 * A list of suppressed email addresses.
**/
export class ListSuppressedDestinationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SuppressedDestinationSummaries", elemType: shared.SuppressedDestinationSummary })
  suppressedDestinationSummaries?: SuppressedDestinationSummary[];
}
