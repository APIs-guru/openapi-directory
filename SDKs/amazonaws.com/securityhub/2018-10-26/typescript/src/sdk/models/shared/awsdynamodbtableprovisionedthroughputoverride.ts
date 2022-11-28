import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsDynamoDbTableProvisionedThroughputOverride
/** 
 * Replica-specific configuration for the provisioned throughput.
**/
export class AwsDynamoDbTableProvisionedThroughputOverride extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReadCapacityUnits" })
  readCapacityUnits?: number;
}
