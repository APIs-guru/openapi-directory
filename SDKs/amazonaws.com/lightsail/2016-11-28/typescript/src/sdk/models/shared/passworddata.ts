import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PasswordData
/** 
 * The password data for the Windows Server-based instance, including the ciphertext and the key pair name.
**/
export class PasswordData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ciphertext" })
  ciphertext?: string;

  @SpeakeasyMetadata({ data: "json, name=keyPairName" })
  keyPairName?: string;
}
