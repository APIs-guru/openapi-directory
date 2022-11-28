import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OutputSource } from "./outputsource";



// AssociationExecutionTarget
/** 
 * Includes information about the specified association execution.
**/
export class AssociationExecutionTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociationId" })
  associationId?: string;

  @SpeakeasyMetadata({ data: "json, name=AssociationVersion" })
  associationVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=DetailedStatus" })
  detailedStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=ExecutionId" })
  executionId?: string;

  @SpeakeasyMetadata({ data: "json, name=LastExecutionDate" })
  lastExecutionDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=OutputSource" })
  outputSource?: OutputSource;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
