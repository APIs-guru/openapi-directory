import { SpeakeasyBase } from "../../../internal/utils";
import { SuppressedDestinationSummary } from "./suppresseddestinationsummary";
/**
 * A list of suppressed email addresses.
**/
export declare class ListSuppressedDestinationsResponse extends SpeakeasyBase {
    nextToken?: string;
    suppressedDestinationSummaries?: SuppressedDestinationSummary[];
}
