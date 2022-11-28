import { SpeakeasyBase } from "../../../internal/utils";
/**
 * For global and local secondary indexes, identifies the attributes that are copied from the table into the index.
**/
export declare class AwsDynamoDbTableProjection extends SpeakeasyBase {
    nonKeyAttributes?: string[];
    projectionType?: string;
}
