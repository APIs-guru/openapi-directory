import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PlaybackKeyPair
/** 
 * A key pair used to sign and validate a playback authorization token.
**/
export class PlaybackKeyPair extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
