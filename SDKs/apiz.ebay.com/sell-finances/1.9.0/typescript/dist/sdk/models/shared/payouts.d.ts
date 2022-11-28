import { SpeakeasyBase } from "../../../internal/utils";
import { Payout } from "./payout";
/**
 * This type is the base response type of the getPayouts method, and contains an array of one or more payouts (that match the input criteria), the total count of payouts in the response, and various pagination data for the results set.
**/
export declare class Payouts extends SpeakeasyBase {
    href?: string;
    limit?: number;
    next?: string;
    offset?: number;
    payouts?: Payout[];
    prev?: string;
    total?: number;
}
