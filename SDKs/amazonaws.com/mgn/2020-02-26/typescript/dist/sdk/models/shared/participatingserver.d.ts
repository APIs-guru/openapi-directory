import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchStatusEnum } from "./launchstatusenum";
/**
 * Server participating in Job.
**/
export declare class ParticipatingServer extends SpeakeasyBase {
    launchStatus?: LaunchStatusEnum;
    sourceServerId?: string;
}
