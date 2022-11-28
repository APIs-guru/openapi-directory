import { SpeakeasyBase } from "../../../internal/utils";
export declare enum IssueJobStatusStatusEnum {
    Accepted = "ACCEPTED",
    Started = "STARTED",
    Running = "RUNNING",
    Failure = "FAILURE"
}
/**
 * The status of an import or export job
**/
export declare class IssueJobStatus extends SpeakeasyBase {
    count?: number;
    pct?: number;
    phase?: string;
    status?: IssueJobStatusStatusEnum;
    total?: number;
    type?: string;
}
