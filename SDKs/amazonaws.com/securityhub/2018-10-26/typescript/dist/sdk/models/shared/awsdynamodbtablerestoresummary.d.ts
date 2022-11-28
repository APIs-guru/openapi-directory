import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the restore for the table.
**/
export declare class AwsDynamoDbTableRestoreSummary extends SpeakeasyBase {
    restoreDateTime?: string;
    restoreInProgress?: boolean;
    sourceBackupArn?: string;
    sourceTableArn?: string;
}
