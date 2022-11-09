import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataReplicationInitiationStepNameEnum } from "./datareplicationinitiationstepnameenum";
import { DataReplicationInitiationStepStatusEnum } from "./datareplicationinitiationstepstatusenum";


// DataReplicationInitiationStep
/** 
 * Data replication intiation step.
**/
export class DataReplicationInitiationStep extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: DataReplicationInitiationStepNameEnum;

  @Metadata({ data: "json, name=status" })
  status?: DataReplicationInitiationStepStatusEnum;
}
