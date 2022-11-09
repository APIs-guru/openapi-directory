import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataReplicationInitiationStep } from "./datareplicationinitiationstep";


// DataReplicationInitiation
/** 
 * Data replication initiation.
**/
export class DataReplicationInitiation extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextAttemptDateTime" })
  nextAttemptDateTime?: string;

  @Metadata({ data: "json, name=startDateTime" })
  startDateTime?: string;

  @Metadata({ data: "json, name=steps", elemType: shared.DataReplicationInitiationStep })
  steps?: DataReplicationInitiationStep[];
}
