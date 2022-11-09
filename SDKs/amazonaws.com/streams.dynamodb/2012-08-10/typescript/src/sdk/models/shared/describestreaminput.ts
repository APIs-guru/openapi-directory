import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeStreamInput
/** 
 * Represents the input of a <code>DescribeStream</code> operation.
**/
export class DescribeStreamInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExclusiveStartShardId" })
  exclusiveStartShardId?: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=StreamArn" })
  streamArn: string;
}
