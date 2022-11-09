import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataReplicationError } from "./datareplicationerror";
import { DataReplicationInitiation } from "./datareplicationinitiation";
import { DataReplicationStateEnum } from "./datareplicationstateenum";
import { DataReplicationInfoReplicatedDisk } from "./datareplicationinforeplicateddisk";


// DataReplicationInfo
/** 
 * Request data replication info.
**/
export class DataReplicationInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataReplicationError" })
  dataReplicationError?: DataReplicationError;

  @Metadata({ data: "json, name=dataReplicationInitiation" })
  dataReplicationInitiation?: DataReplicationInitiation;

  @Metadata({ data: "json, name=dataReplicationState" })
  dataReplicationState?: DataReplicationStateEnum;

  @Metadata({ data: "json, name=etaDateTime" })
  etaDateTime?: string;

  @Metadata({ data: "json, name=lagDuration" })
  lagDuration?: string;

  @Metadata({ data: "json, name=replicatedDisks", elemType: shared.DataReplicationInfoReplicatedDisk })
  replicatedDisks?: DataReplicationInfoReplicatedDisk[];
}
