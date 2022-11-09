import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsDynamoDbTableSseDescription
/** 
 * Information about the server-side encryption for the table.
**/
export class AwsDynamoDbTableSseDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=InaccessibleEncryptionDateTime" })
  inaccessibleEncryptionDateTime?: string;

  @Metadata({ data: "json, name=KmsMasterKeyArn" })
  kmsMasterKeyArn?: string;

  @Metadata({ data: "json, name=SseType" })
  sseType?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
