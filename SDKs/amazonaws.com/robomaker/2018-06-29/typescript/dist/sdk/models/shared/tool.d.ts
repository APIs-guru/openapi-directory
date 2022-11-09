import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ExitBehaviorEnum } from "./exitbehaviorenum";
/**
 * Information about a tool. Tools are used in a simulation job.
**/
export declare class Tool extends SpeakeasyBase {
    command: string;
    exitBehavior?: ExitBehaviorEnum;
    name: string;
    streamOutputToCloudWatch?: boolean;
    streamUi?: boolean;
}
