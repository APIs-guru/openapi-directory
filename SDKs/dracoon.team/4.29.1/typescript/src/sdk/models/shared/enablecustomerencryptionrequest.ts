import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserKeyPairContainer } from "./userkeypaircontainer";



// EnableCustomerEncryptionRequest
/** 
 * Request model for enabling customer encryption
**/
export class EnableCustomerEncryptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSpaceRescueKey" })
  dataSpaceRescueKey: UserKeyPairContainer;

  @SpeakeasyMetadata({ data: "json, name=enableCustomerEncryption" })
  enableCustomerEncryption: boolean;
}
