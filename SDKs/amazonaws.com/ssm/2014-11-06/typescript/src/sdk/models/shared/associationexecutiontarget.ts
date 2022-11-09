import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OutputSource } from "./outputsource";


// AssociationExecutionTarget
/** 
 * Includes information about the specified association execution.
**/
export class AssociationExecutionTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociationId" })
  associationId?: string;

  @Metadata({ data: "json, name=AssociationVersion" })
  associationVersion?: string;

  @Metadata({ data: "json, name=DetailedStatus" })
  detailedStatus?: string;

  @Metadata({ data: "json, name=ExecutionId" })
  executionId?: string;

  @Metadata({ data: "json, name=LastExecutionDate" })
  lastExecutionDate?: Date;

  @Metadata({ data: "json, name=OutputSource" })
  outputSource?: OutputSource;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
