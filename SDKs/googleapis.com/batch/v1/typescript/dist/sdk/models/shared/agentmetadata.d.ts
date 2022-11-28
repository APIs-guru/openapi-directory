import { SpeakeasyBase } from "../../../internal/utils";
/**
 * AgentMetadata never changes for a single instance of VM agent.
**/
export declare class AgentMetadata extends SpeakeasyBase {
    creationTime?: string;
    creator?: string;
    instance?: string;
    instanceId?: string;
    osRelease?: Map<string, string>;
    version?: string;
    zone?: string;
}
