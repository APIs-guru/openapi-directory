import { SpeakeasyBase } from "../../../internal/utils";
import { ComputeResource } from "./computeresource";
import { Environment } from "./environment";
import { LifecyclePolicy } from "./lifecyclepolicy";
import { Runnable } from "./runnable";
import { Volume } from "./volume";
/**
 * Spec of a task
**/
export declare class TaskSpec extends SpeakeasyBase {
    computeResource?: ComputeResource;
    environment?: Environment;
    environments?: Map<string, string>;
    lifecyclePolicies?: LifecyclePolicy[];
    maxRetryCount?: number;
    maxRunDuration?: string;
    runnables?: Runnable[];
    volumes?: Volume[];
}
