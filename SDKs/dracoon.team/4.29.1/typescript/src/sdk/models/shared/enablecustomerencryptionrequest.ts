import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserKeyPairContainer } from "./userkeypaircontainer";


// EnableCustomerEncryptionRequest
/** 
 * Request model for enabling customer encryption
**/
export class EnableCustomerEncryptionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSpaceRescueKey" })
  dataSpaceRescueKey: UserKeyPairContainer;

  @Metadata({ data: "json, name=enableCustomerEncryption" })
  enableCustomerEncryption: boolean;
}
