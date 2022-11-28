import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the server-side encryption for the table.
**/
export declare class AwsDynamoDbTableSseDescription extends SpeakeasyBase {
    inaccessibleEncryptionDateTime?: string;
    kmsMasterKeyArn?: string;
    sseType?: string;
    status?: string;
}
