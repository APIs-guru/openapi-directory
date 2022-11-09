import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SshKey
/** 
 * An SSH key, used for authorizing with the interactive serial console feature.
**/
export class SshKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=publicKey" })
  publicKey?: string;
}
