import { SpeakeasyBase } from "../../../internal/utils";
import { AwsDynamoDbTableAttributeDefinition } from "./awsdynamodbtableattributedefinition";
import { AwsDynamoDbTableBillingModeSummary } from "./awsdynamodbtablebillingmodesummary";
import { AwsDynamoDbTableGlobalSecondaryIndex } from "./awsdynamodbtableglobalsecondaryindex";
import { AwsDynamoDbTableKeySchema } from "./awsdynamodbtablekeyschema";
import { AwsDynamoDbTableLocalSecondaryIndex } from "./awsdynamodbtablelocalsecondaryindex";
import { AwsDynamoDbTableProvisionedThroughput } from "./awsdynamodbtableprovisionedthroughput";
import { AwsDynamoDbTableReplica } from "./awsdynamodbtablereplica";
import { AwsDynamoDbTableRestoreSummary } from "./awsdynamodbtablerestoresummary";
import { AwsDynamoDbTableSseDescription } from "./awsdynamodbtablessedescription";
import { AwsDynamoDbTableStreamSpecification } from "./awsdynamodbtablestreamspecification";
/**
 * Provides details about a DynamoDB table.
**/
export declare class AwsDynamoDbTableDetails extends SpeakeasyBase {
    attributeDefinitions?: AwsDynamoDbTableAttributeDefinition[];
    billingModeSummary?: AwsDynamoDbTableBillingModeSummary;
    creationDateTime?: string;
    globalSecondaryIndexes?: AwsDynamoDbTableGlobalSecondaryIndex[];
    globalTableVersion?: string;
    itemCount?: number;
    keySchema?: AwsDynamoDbTableKeySchema[];
    latestStreamArn?: string;
    latestStreamLabel?: string;
    localSecondaryIndexes?: AwsDynamoDbTableLocalSecondaryIndex[];
    provisionedThroughput?: AwsDynamoDbTableProvisionedThroughput;
    replicas?: AwsDynamoDbTableReplica[];
    restoreSummary?: AwsDynamoDbTableRestoreSummary;
    sseDescription?: AwsDynamoDbTableSseDescription;
    streamSpecification?: AwsDynamoDbTableStreamSpecification;
    tableId?: string;
    tableName?: string;
    tableSizeBytes?: number;
    tableStatus?: string;
}
