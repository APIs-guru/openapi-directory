import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsDynamoDbTableRestoreSummary
/** 
 * Information about the restore for the table.
**/
export class AwsDynamoDbTableRestoreSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=RestoreDateTime" })
  restoreDateTime?: string;

  @Metadata({ data: "json, name=RestoreInProgress" })
  restoreInProgress?: boolean;

  @Metadata({ data: "json, name=SourceBackupArn" })
  sourceBackupArn?: string;

  @Metadata({ data: "json, name=SourceTableArn" })
  sourceTableArn?: string;
}
