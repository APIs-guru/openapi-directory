import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListStreamsInput
/** 
 * Represents the input of a <code>ListStreams</code> operation.
**/
export class ListStreamsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExclusiveStartStreamArn" })
  exclusiveStartStreamArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName?: string;
}
