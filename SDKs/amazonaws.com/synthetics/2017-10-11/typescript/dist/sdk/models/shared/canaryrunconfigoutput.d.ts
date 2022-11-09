import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A structure that contains information about a canary run.
**/
export declare class CanaryRunConfigOutput extends SpeakeasyBase {
    activeTracing?: boolean;
    memoryInMb?: number;
    timeoutInSeconds?: number;
}
