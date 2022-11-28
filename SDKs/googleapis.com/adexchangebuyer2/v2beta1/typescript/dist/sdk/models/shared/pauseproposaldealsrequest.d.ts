import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message to pause serving for finalized deals.
**/
export declare class PauseProposalDealsRequest extends SpeakeasyBase {
    externalDealIds?: string[];
    reason?: string;
}
