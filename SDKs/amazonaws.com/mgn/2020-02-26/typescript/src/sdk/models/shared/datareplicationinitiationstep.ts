import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataReplicationInitiationStepNameEnum } from "./datareplicationinitiationstepnameenum";
import { DataReplicationInitiationStepStatusEnum } from "./datareplicationinitiationstepstatusenum";



// DataReplicationInitiationStep
/** 
 * Data replication intiation step.
**/
export class DataReplicationInitiationStep extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: DataReplicationInitiationStepNameEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: DataReplicationInitiationStepStatusEnum;
}
