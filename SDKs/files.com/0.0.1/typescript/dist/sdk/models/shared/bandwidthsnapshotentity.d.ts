import { SpeakeasyBase } from "../../../internal/utils";
/**
 * List Bandwidth Snapshots
**/
export declare class BandwidthSnapshotEntity extends SpeakeasyBase {
    bytesReceived?: number;
    bytesSent?: number;
    createdAt?: Date;
    id?: number;
    loggedAt?: Date;
    requestsGet?: number;
    requestsOther?: number;
    requestsPut?: number;
    syncBytesReceived?: number;
    syncBytesSent?: number;
    updatedAt?: Date;
}
