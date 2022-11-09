import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ExecutionStateEnum } from "./executionstateenum";
export declare class DescribeExecutionOutput extends SpeakeasyBase {
    executionId?: string;
    lastUpdatedAt?: Date;
    managedDeviceId?: string;
    startedAt?: Date;
    state?: ExecutionStateEnum;
    taskId?: string;
}
