import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsDynamoDbTableProvisionedThroughputOverride
/** 
 * Replica-specific configuration for the provisioned throughput.
**/
export class AwsDynamoDbTableProvisionedThroughputOverride extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReadCapacityUnits" })
  readCapacityUnits?: number;
}
