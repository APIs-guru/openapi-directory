import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides the details about the compliance status for a patch.
**/
export declare class AwsSsmComplianceSummary extends SpeakeasyBase {
    complianceType?: string;
    compliantCriticalCount?: number;
    compliantHighCount?: number;
    compliantInformationalCount?: number;
    compliantLowCount?: number;
    compliantMediumCount?: number;
    compliantUnspecifiedCount?: number;
    executionType?: string;
    nonCompliantCriticalCount?: number;
    nonCompliantHighCount?: number;
    nonCompliantInformationalCount?: number;
    nonCompliantLowCount?: number;
    nonCompliantMediumCount?: number;
    nonCompliantUnspecifiedCount?: number;
    overallSeverity?: string;
    patchBaselineId?: string;
    patchGroup?: string;
    status?: string;
}
