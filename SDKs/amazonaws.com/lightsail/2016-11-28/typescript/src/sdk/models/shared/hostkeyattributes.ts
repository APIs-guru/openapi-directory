import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HostKeyAttributes
/** 
 * Describes the public SSH host keys or the RDP certificate.
**/
export class HostKeyAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algorithm" })
  algorithm?: string;

  @SpeakeasyMetadata({ data: "json, name=fingerprintSHA1" })
  fingerprintSha1?: string;

  @SpeakeasyMetadata({ data: "json, name=fingerprintSHA256" })
  fingerprintSha256?: string;

  @SpeakeasyMetadata({ data: "json, name=notValidAfter" })
  notValidAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=notValidBefore" })
  notValidBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=publicKey" })
  publicKey?: string;

  @SpeakeasyMetadata({ data: "json, name=witnessedAt" })
  witnessedAt?: Date;
}
