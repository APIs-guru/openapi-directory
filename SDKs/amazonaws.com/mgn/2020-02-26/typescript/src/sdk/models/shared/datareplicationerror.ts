import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataReplicationErrorStringEnum } from "./datareplicationerrorstringenum";



// DataReplicationError
/** 
 * Error in data replication.
**/
export class DataReplicationError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: DataReplicationErrorStringEnum;

  @SpeakeasyMetadata({ data: "json, name=rawError" })
  rawError?: string;
}
