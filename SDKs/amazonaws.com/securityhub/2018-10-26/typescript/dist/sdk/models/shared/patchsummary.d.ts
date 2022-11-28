import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides an overview of the patch compliance status for an instance against a selected compliance standard.
**/
export declare class PatchSummary extends SpeakeasyBase {
    failedCount?: number;
    id: string;
    installedCount?: number;
    installedOtherCount?: number;
    installedPendingReboot?: number;
    installedRejectedCount?: number;
    missingCount?: number;
    operation?: string;
    operationEndTime?: string;
    operationStartTime?: string;
    rebootOption?: string;
}
