import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AssociationExecution
/** 
 * Includes information about the specified association.
**/
export class AssociationExecution extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociationId" })
  associationId?: string;

  @Metadata({ data: "json, name=AssociationVersion" })
  associationVersion?: string;

  @Metadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @Metadata({ data: "json, name=DetailedStatus" })
  detailedStatus?: string;

  @Metadata({ data: "json, name=ExecutionId" })
  executionId?: string;

  @Metadata({ data: "json, name=LastExecutionDate" })
  lastExecutionDate?: Date;

  @Metadata({ data: "json, name=ResourceCountByStatus" })
  resourceCountByStatus?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
