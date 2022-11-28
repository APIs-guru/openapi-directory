import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PlaybackKeyPair
/** 
 * A key pair used to sign and validate a playback authorization token.
**/
export class PlaybackKeyPair extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
