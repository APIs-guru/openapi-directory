import { SpeakeasyBase } from "../../../internal/utils";
export declare class DbClusterCapacityInfo extends SpeakeasyBase {
    currentCapacity?: number;
    dbClusterIdentifier?: string;
    pendingCapacity?: number;
    secondsBeforeTimeout?: number;
    timeoutAction?: string;
}
