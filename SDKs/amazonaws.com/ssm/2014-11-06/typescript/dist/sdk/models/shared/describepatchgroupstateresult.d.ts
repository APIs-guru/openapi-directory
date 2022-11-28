import { SpeakeasyBase } from "../../../internal/utils";
export declare class DescribePatchGroupStateResult extends SpeakeasyBase {
    instances?: number;
    instancesWithCriticalNonCompliantPatches?: number;
    instancesWithFailedPatches?: number;
    instancesWithInstalledOtherPatches?: number;
    instancesWithInstalledPatches?: number;
    instancesWithInstalledPendingRebootPatches?: number;
    instancesWithInstalledRejectedPatches?: number;
    instancesWithMissingPatches?: number;
    instancesWithNotApplicablePatches?: number;
    instancesWithOtherNonCompliantPatches?: number;
    instancesWithSecurityNonCompliantPatches?: number;
    instancesWithUnreportedNotApplicablePatches?: number;
}
