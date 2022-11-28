import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SshKeyInput
/** 
 * An SSH key, used for authorizing with the interactive serial console feature.
**/
export class SshKeyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=publicKey" })
  publicKey?: string;
}


// SshKey
/** 
 * An SSH key, used for authorizing with the interactive serial console feature.
**/
export class SshKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=publicKey" })
  publicKey?: string;
}
