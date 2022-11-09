import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PasswordData
/** 
 * The password data for the Windows Server-based instance, including the ciphertext and the key pair name.
**/
export class PasswordData extends SpeakeasyBase {
  @Metadata({ data: "json, name=ciphertext" })
  ciphertext?: string;

  @Metadata({ data: "json, name=keyPairName" })
  keyPairName?: string;
}
