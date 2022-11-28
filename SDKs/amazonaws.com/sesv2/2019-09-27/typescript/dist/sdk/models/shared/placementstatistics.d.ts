import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that contains inbox placement data for an email provider.
**/
export declare class PlacementStatistics extends SpeakeasyBase {
    dkimPercentage?: number;
    inboxPercentage?: number;
    missingPercentage?: number;
    spamPercentage?: number;
    spfPercentage?: number;
}
