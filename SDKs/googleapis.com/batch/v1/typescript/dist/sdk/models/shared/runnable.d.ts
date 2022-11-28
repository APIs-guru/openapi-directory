import { SpeakeasyBase } from "../../../internal/utils";
import { Barrier } from "./barrier";
import { Container } from "./container";
import { Environment } from "./environment";
import { Script } from "./script";
/**
 * Runnable describes instructions for executing a specific script or container as part of a Task.
**/
export declare class Runnable extends SpeakeasyBase {
    alwaysRun?: boolean;
    background?: boolean;
    barrier?: Barrier;
    container?: Container;
    environment?: Environment;
    ignoreExitStatus?: boolean;
    script?: Script;
    timeout?: string;
}
