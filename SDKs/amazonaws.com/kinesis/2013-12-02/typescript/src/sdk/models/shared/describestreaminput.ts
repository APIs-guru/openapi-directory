import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeStreamInput
/** 
 * Represents the input for <code>DescribeStream</code>.
**/
export class DescribeStreamInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExclusiveStartShardId" })
  exclusiveStartShardId?: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=StreamName" })
  streamName: string;
}
