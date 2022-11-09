import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=AttributeDefinitions", elemType: shared.AwsDynamoDbTableAttributeDefinition })
  attributeDefinitions?: AwsDynamoDbTableAttributeDefinition[];

  @Metadata({ data: "json, name=BillingModeSummary" })
  billingModeSummary?: AwsDynamoDbTableBillingModeSummary;

  @Metadata({ data: "json, name=CreationDateTime" })
  creationDateTime?: string;

  @Metadata({ data: "json, name=GlobalSecondaryIndexes", elemType: shared.AwsDynamoDbTableGlobalSecondaryIndex })
  globalSecondaryIndexes?: AwsDynamoDbTableGlobalSecondaryIndex[];

  @Metadata({ data: "json, name=GlobalTableVersion" })
  globalTableVersion?: string;

  @Metadata({ data: "json, name=ItemCount" })
  itemCount?: number;

  @Metadata({ data: "json, name=KeySchema", elemType: shared.AwsDynamoDbTableKeySchema })
  keySchema?: AwsDynamoDbTableKeySchema[];

  @Metadata({ data: "json, name=LatestStreamArn" })
  latestStreamArn?: string;

  @Metadata({ data: "json, name=LatestStreamLabel" })
  latestStreamLabel?: string;

  @Metadata({ data: "json, name=LocalSecondaryIndexes", elemType: shared.AwsDynamoDbTableLocalSecondaryIndex })
  localSecondaryIndexes?: AwsDynamoDbTableLocalSecondaryIndex[];

  @Metadata({ data: "json, name=ProvisionedThroughput" })
  provisionedThroughput?: AwsDynamoDbTableProvisionedThroughput;

  @Metadata({ data: "json, name=Replicas", elemType: shared.AwsDynamoDbTableReplica })
  replicas?: AwsDynamoDbTableReplica[];

  @Metadata({ data: "json, name=RestoreSummary" })
  restoreSummary?: AwsDynamoDbTableRestoreSummary;

  @Metadata({ data: "json, name=SseDescription" })
  sseDescription?: AwsDynamoDbTableSseDescription;

  @Metadata({ data: "json, name=StreamSpecification" })
  streamSpecification?: AwsDynamoDbTableStreamSpecification;

  @Metadata({ data: "json, name=TableId" })
  tableId?: string;

  @Metadata({ data: "json, name=TableName" })
  tableName?: string;

  @Metadata({ data: "json, name=TableSizeBytes" })
  tableSizeBytes?: number;

  @Metadata({ data: "json, name=TableStatus" })
  tableStatus?: string;
}
