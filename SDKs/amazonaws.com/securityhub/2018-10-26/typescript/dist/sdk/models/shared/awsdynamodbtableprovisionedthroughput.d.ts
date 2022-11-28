import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the provisioned throughput for the table or for a global secondary index.
**/
export declare class AwsDynamoDbTableProvisionedThroughput extends SpeakeasyBase {
    lastDecreaseDateTime?: string;
    lastIncreaseDateTime?: string;
    numberOfDecreasesToday?: number;
    readCapacityUnits?: number;
    writeCapacityUnits?: number;
}
