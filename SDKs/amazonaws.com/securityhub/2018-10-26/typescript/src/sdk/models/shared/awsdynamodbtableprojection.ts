import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsDynamoDbTableProjection
/** 
 * For global and local secondary indexes, identifies the attributes that are copied from the table into the index.
**/
export class AwsDynamoDbTableProjection extends SpeakeasyBase {
  @Metadata({ data: "json, name=NonKeyAttributes" })
  nonKeyAttributes?: string[];

  @Metadata({ data: "json, name=ProjectionType" })
  projectionType?: string;
}
