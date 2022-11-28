import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a command.
**/
export declare class Command extends SpeakeasyBase {
    acknowledgedAt?: string;
    commandId?: string;
    completedAt?: string;
    createdAt?: string;
    deploymentId?: string;
    exitCode?: number;
    instanceId?: string;
    logUrl?: string;
    status?: string;
    type?: string;
}
