import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScheduleStateEnum } from "./schedulestateenum";



// ClusterAssociatedToSchedule
/** 
 * <p/>
**/
export class ClusterAssociatedToSchedule extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clusterIdentifier?: string;

  @SpeakeasyMetadata()
  scheduleAssociationState?: ScheduleStateEnum;
}
