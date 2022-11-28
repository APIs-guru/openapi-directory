import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataReplicationError } from "./datareplicationerror";
import { DataReplicationInitiation } from "./datareplicationinitiation";
import { DataReplicationStateEnum } from "./datareplicationstateenum";
import { DataReplicationInfoReplicatedDisk } from "./datareplicationinforeplicateddisk";



// DataReplicationInfo
/** 
 * Request data replication info.
**/
export class DataReplicationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataReplicationError" })
  dataReplicationError?: DataReplicationError;

  @SpeakeasyMetadata({ data: "json, name=dataReplicationInitiation" })
  dataReplicationInitiation?: DataReplicationInitiation;

  @SpeakeasyMetadata({ data: "json, name=dataReplicationState" })
  dataReplicationState?: DataReplicationStateEnum;

  @SpeakeasyMetadata({ data: "json, name=etaDateTime" })
  etaDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=lagDuration" })
  lagDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=replicatedDisks", elemType: DataReplicationInfoReplicatedDisk })
  replicatedDisks?: DataReplicationInfoReplicatedDisk[];
}
