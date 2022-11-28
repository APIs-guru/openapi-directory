import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssociationExecution
/** 
 * Includes information about the specified association.
**/
export class AssociationExecution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociationId" })
  associationId?: string;

  @SpeakeasyMetadata({ data: "json, name=AssociationVersion" })
  associationVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DetailedStatus" })
  detailedStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=ExecutionId" })
  executionId?: string;

  @SpeakeasyMetadata({ data: "json, name=LastExecutionDate" })
  lastExecutionDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ResourceCountByStatus" })
  resourceCountByStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
