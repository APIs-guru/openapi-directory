import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsDynamoDbTableProvisionedThroughput
/** 
 * Information about the provisioned throughput for the table or for a global secondary index.
**/
export class AwsDynamoDbTableProvisionedThroughput extends SpeakeasyBase {
  @Metadata({ data: "json, name=LastDecreaseDateTime" })
  lastDecreaseDateTime?: string;

  @Metadata({ data: "json, name=LastIncreaseDateTime" })
  lastIncreaseDateTime?: string;

  @Metadata({ data: "json, name=NumberOfDecreasesToday" })
  numberOfDecreasesToday?: number;

  @Metadata({ data: "json, name=ReadCapacityUnits" })
  readCapacityUnits?: number;

  @Metadata({ data: "json, name=WriteCapacityUnits" })
  writeCapacityUnits?: number;
}
