import { SpeakeasyBase } from "../../../internal/utils";
import { AwsDynamoDbTableKeySchema } from "./awsdynamodbtablekeyschema";
import { AwsDynamoDbTableProjection } from "./awsdynamodbtableprojection";
import { AwsDynamoDbTableProvisionedThroughput } from "./awsdynamodbtableprovisionedthroughput";
/**
 * Information abut a global secondary index for the table.
**/
export declare class AwsDynamoDbTableGlobalSecondaryIndex extends SpeakeasyBase {
    backfilling?: boolean;
    indexArn?: string;
    indexName?: string;
    indexSizeBytes?: number;
    indexStatus?: string;
    itemCount?: number;
    keySchema?: AwsDynamoDbTableKeySchema[];
    projection?: AwsDynamoDbTableProjection;
    provisionedThroughput?: AwsDynamoDbTableProvisionedThroughput;
}
