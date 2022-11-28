import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StreamKeySummary
/** 
 * Summary information about a stream key.
**/
export class StreamKeySummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=channelArn" })
  channelArn?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
