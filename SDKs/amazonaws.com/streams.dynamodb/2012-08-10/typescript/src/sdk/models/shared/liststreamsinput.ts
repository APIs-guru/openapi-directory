import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListStreamsInput
/** 
 * Represents the input of a <code>ListStreams</code> operation.
**/
export class ListStreamsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExclusiveStartStreamArn" })
  exclusiveStartStreamArn?: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=TableName" })
  tableName?: string;
}
