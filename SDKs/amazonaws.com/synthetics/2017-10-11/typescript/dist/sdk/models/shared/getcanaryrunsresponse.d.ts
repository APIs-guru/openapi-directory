import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CanaryRun } from "./canaryrun";
export declare class GetCanaryRunsResponse extends SpeakeasyBase {
    canaryRuns?: CanaryRun[];
    nextToken?: string;
}
