import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PlaybackKeyPairSummary
/** 
 * Summary information about a playback key pair.
**/
export class PlaybackKeyPairSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
