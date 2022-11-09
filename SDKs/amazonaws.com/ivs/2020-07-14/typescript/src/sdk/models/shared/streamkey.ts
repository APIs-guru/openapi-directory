import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StreamKey
/** 
 * Object specifying a stream key.
**/
export class StreamKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=channelArn" })
  channelArn?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
