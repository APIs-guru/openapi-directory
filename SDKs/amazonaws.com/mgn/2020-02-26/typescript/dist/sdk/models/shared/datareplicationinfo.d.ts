import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DataReplicationError } from "./datareplicationerror";
import { DataReplicationInitiation } from "./datareplicationinitiation";
import { DataReplicationStateEnum } from "./datareplicationstateenum";
import { DataReplicationInfoReplicatedDisk } from "./datareplicationinforeplicateddisk";
/**
 * Request data replication info.
**/
export declare class DataReplicationInfo extends SpeakeasyBase {
    dataReplicationError?: DataReplicationError;
    dataReplicationInitiation?: DataReplicationInitiation;
    dataReplicationState?: DataReplicationStateEnum;
    etaDateTime?: string;
    lagDuration?: string;
    replicatedDisks?: DataReplicationInfoReplicatedDisk[];
}
