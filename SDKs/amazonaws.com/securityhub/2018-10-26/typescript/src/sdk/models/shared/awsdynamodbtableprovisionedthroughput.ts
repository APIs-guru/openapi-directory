import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsDynamoDbTableProvisionedThroughput
/** 
 * Information about the provisioned throughput for the table or for a global secondary index.
**/
export class AwsDynamoDbTableProvisionedThroughput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LastDecreaseDateTime" })
  lastDecreaseDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=LastIncreaseDateTime" })
  lastIncreaseDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=NumberOfDecreasesToday" })
  numberOfDecreasesToday?: number;

  @SpeakeasyMetadata({ data: "json, name=ReadCapacityUnits" })
  readCapacityUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=WriteCapacityUnits" })
  writeCapacityUnits?: number;
}
