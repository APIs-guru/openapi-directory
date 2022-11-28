import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeStreamInput
/** 
 * Represents the input for <code>DescribeStream</code>.
**/
export class DescribeStreamInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExclusiveStartShardId" })
  exclusiveStartShardId?: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=StreamName" })
  streamName: string;
}
