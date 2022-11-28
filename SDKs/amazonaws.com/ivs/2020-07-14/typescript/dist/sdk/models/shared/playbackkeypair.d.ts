import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A key pair used to sign and validate a playback authorization token.
**/
export declare class PlaybackKeyPair extends SpeakeasyBase {
    arn?: string;
    fingerprint?: string;
    name?: string;
    tags?: Map<string, string>;
}
