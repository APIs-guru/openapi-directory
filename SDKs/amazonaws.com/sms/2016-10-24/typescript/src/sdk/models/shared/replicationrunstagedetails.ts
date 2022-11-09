import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReplicationRunStageDetails
/** 
 * Details of the current stage of a replication run.
**/
export class ReplicationRunStageDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=stage" })
  stage?: string;

  @Metadata({ data: "json, name=stageProgress" })
  stageProgress?: string;
}
