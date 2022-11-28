import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsDynamoDbTableRestoreSummary
/** 
 * Information about the restore for the table.
**/
export class AwsDynamoDbTableRestoreSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RestoreDateTime" })
  restoreDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=RestoreInProgress" })
  restoreInProgress?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SourceBackupArn" })
  sourceBackupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceTableArn" })
  sourceTableArn?: string;
}
