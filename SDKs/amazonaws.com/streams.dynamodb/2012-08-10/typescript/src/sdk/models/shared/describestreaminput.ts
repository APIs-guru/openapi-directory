import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeStreamInput
/** 
 * Represents the input of a <code>DescribeStream</code> operation.
**/
export class DescribeStreamInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExclusiveStartShardId" })
  exclusiveStartShardId?: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=StreamArn" })
  streamArn: string;
}
