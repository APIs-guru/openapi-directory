import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsDynamoDbTableSseDescription
/** 
 * Information about the server-side encryption for the table.
**/
export class AwsDynamoDbTableSseDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InaccessibleEncryptionDateTime" })
  inaccessibleEncryptionDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=KmsMasterKeyArn" })
  kmsMasterKeyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SseType" })
  sseType?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
