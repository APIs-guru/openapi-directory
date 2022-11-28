import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReplicationRunStageDetails
/** 
 * Details of the current stage of a replication run.
**/
export class ReplicationRunStageDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=stage" })
  stage?: string;

  @SpeakeasyMetadata({ data: "json, name=stageProgress" })
  stageProgress?: string;
}
