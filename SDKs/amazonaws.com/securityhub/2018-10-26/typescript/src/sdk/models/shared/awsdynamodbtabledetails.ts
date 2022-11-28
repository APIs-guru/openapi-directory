import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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



// AwsDynamoDbTableDetails
/** 
 * Provides details about a DynamoDB table.
**/
export class AwsDynamoDbTableDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeDefinitions", elemType: AwsDynamoDbTableAttributeDefinition })
  attributeDefinitions?: AwsDynamoDbTableAttributeDefinition[];

  @SpeakeasyMetadata({ data: "json, name=BillingModeSummary" })
  billingModeSummary?: AwsDynamoDbTableBillingModeSummary;

  @SpeakeasyMetadata({ data: "json, name=CreationDateTime" })
  creationDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=GlobalSecondaryIndexes", elemType: AwsDynamoDbTableGlobalSecondaryIndex })
  globalSecondaryIndexes?: AwsDynamoDbTableGlobalSecondaryIndex[];

  @SpeakeasyMetadata({ data: "json, name=GlobalTableVersion" })
  globalTableVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=ItemCount" })
  itemCount?: number;

  @SpeakeasyMetadata({ data: "json, name=KeySchema", elemType: AwsDynamoDbTableKeySchema })
  keySchema?: AwsDynamoDbTableKeySchema[];

  @SpeakeasyMetadata({ data: "json, name=LatestStreamArn" })
  latestStreamArn?: string;

  @SpeakeasyMetadata({ data: "json, name=LatestStreamLabel" })
  latestStreamLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=LocalSecondaryIndexes", elemType: AwsDynamoDbTableLocalSecondaryIndex })
  localSecondaryIndexes?: AwsDynamoDbTableLocalSecondaryIndex[];

  @SpeakeasyMetadata({ data: "json, name=ProvisionedThroughput" })
  provisionedThroughput?: AwsDynamoDbTableProvisionedThroughput;

  @SpeakeasyMetadata({ data: "json, name=Replicas", elemType: AwsDynamoDbTableReplica })
  replicas?: AwsDynamoDbTableReplica[];

  @SpeakeasyMetadata({ data: "json, name=RestoreSummary" })
  restoreSummary?: AwsDynamoDbTableRestoreSummary;

  @SpeakeasyMetadata({ data: "json, name=SseDescription" })
  sseDescription?: AwsDynamoDbTableSseDescription;

  @SpeakeasyMetadata({ data: "json, name=StreamSpecification" })
  streamSpecification?: AwsDynamoDbTableStreamSpecification;

  @SpeakeasyMetadata({ data: "json, name=TableId" })
  tableId?: string;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName?: string;

  @SpeakeasyMetadata({ data: "json, name=TableSizeBytes" })
  tableSizeBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=TableStatus" })
  tableStatus?: string;
}
