import { SpeakeasyBase } from "../../../internal/utils";
import { DataReplicationErrorStringEnum } from "./datareplicationerrorstringenum";
/**
 * Error in data replication.
**/
export declare class DataReplicationError extends SpeakeasyBase {
    error?: DataReplicationErrorStringEnum;
    rawError?: string;
}
