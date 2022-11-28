import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The details of process-related information about a finding.
**/
export declare class ProcessDetails extends SpeakeasyBase {
    launchedAt?: string;
    name?: string;
    parentPid?: number;
    path?: string;
    pid?: number;
    terminatedAt?: string;
}
