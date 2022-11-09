import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StreamKeySummary
/** 
 * Summary information about a stream key.
**/
export class StreamKeySummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=channelArn" })
  channelArn?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
