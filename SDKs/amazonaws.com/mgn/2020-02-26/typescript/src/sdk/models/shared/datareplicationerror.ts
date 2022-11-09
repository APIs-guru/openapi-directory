import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataReplicationErrorStringEnum } from "./datareplicationerrorstringenum";


// DataReplicationError
/** 
 * Error in data replication.
**/
export class DataReplicationError extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: DataReplicationErrorStringEnum;

  @Metadata({ data: "json, name=rawError" })
  rawError?: string;
}
