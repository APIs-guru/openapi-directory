import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CanaryRunStatus } from "./canaryrunstatus";
import { CanaryRunTimeline } from "./canaryruntimeline";
/**
 * This structure contains the details about one run of one canary.
**/
export declare class CanaryRun extends SpeakeasyBase {
    artifactS3Location?: string;
    id?: string;
    name?: string;
    status?: CanaryRunStatus;
    timeline?: CanaryRunTimeline;
}
