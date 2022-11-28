import { SpeakeasyBase } from "../../../internal/utils";
import { InstancesCount } from "./instancescount";
/**
 * Summarizes the number of layers, instances, and apps in a stack.
**/
export declare class StackSummary extends SpeakeasyBase {
    appsCount?: number;
    arn?: string;
    instancesCount?: InstancesCount;
    layersCount?: number;
    name?: string;
    stackId?: string;
}
