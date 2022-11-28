import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StreamKey
/** 
 * Object specifying a stream key.
**/
export class StreamKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=channelArn" })
  channelArn?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
