import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PlaybackKeyPairSummary
/** 
 * Summary information about a playback key pair.
**/
export class PlaybackKeyPairSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
