import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes how many instances a stack has for each status.
**/
export declare class InstancesCount extends SpeakeasyBase {
    assigning?: number;
    booting?: number;
    connectionLost?: number;
    deregistering?: number;
    online?: number;
    pending?: number;
    rebooting?: number;
    registered?: number;
    registering?: number;
    requested?: number;
    runningSetup?: number;
    setupFailed?: number;
    shuttingDown?: number;
    startFailed?: number;
    stopFailed?: number;
    stopped?: number;
    stopping?: number;
    terminated?: number;
    terminating?: number;
    unassigning?: number;
}
