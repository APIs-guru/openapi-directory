import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsDynamoDbTableProjection
/** 
 * For global and local secondary indexes, identifies the attributes that are copied from the table into the index.
**/
export class AwsDynamoDbTableProjection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NonKeyAttributes" })
  nonKeyAttributes?: string[];

  @SpeakeasyMetadata({ data: "json, name=ProjectionType" })
  projectionType?: string;
}
