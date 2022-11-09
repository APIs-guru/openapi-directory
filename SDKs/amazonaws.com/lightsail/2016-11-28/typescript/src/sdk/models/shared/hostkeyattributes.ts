import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HostKeyAttributes
/** 
 * Describes the public SSH host keys or the RDP certificate.
**/
export class HostKeyAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=algorithm" })
  algorithm?: string;

  @Metadata({ data: "json, name=fingerprintSHA1" })
  fingerprintSha1?: string;

  @Metadata({ data: "json, name=fingerprintSHA256" })
  fingerprintSha256?: string;

  @Metadata({ data: "json, name=notValidAfter" })
  notValidAfter?: Date;

  @Metadata({ data: "json, name=notValidBefore" })
  notValidBefore?: Date;

  @Metadata({ data: "json, name=publicKey" })
  publicKey?: string;

  @Metadata({ data: "json, name=witnessedAt" })
  witnessedAt?: Date;
}
