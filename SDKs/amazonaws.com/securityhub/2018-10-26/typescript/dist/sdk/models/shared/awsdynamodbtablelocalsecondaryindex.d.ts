import { SpeakeasyBase } from "../../../internal/utils";
import { AwsDynamoDbTableKeySchema } from "./awsdynamodbtablekeyschema";
import { AwsDynamoDbTableProjection } from "./awsdynamodbtableprojection";
/**
 * Information about a local secondary index for a DynamoDB table.
**/
export declare class AwsDynamoDbTableLocalSecondaryIndex extends SpeakeasyBase {
    indexArn?: string;
    indexName?: string;
    keySchema?: AwsDynamoDbTableKeySchema[];
    projection?: AwsDynamoDbTableProjection;
}
