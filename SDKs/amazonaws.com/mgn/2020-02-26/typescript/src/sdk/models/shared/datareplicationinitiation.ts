import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataReplicationInitiationStep } from "./datareplicationinitiationstep";



// DataReplicationInitiation
/** 
 * Data replication initiation.
**/
export class DataReplicationInitiation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextAttemptDateTime" })
  nextAttemptDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startDateTime" })
  startDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=steps", elemType: DataReplicationInitiationStep })
  steps?: DataReplicationInitiationStep[];
}
