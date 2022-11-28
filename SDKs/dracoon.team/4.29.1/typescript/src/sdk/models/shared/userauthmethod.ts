import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyValueEntry } from "./keyvalueentry";



// UserAuthMethod
/** 
 * Authentication method
**/
export class UserAuthMethod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authId" })
  authId: string;

  @SpeakeasyMetadata({ data: "json, name=isEnabled" })
  isEnabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=options", elemType: KeyValueEntry })
  options?: KeyValueEntry[];
}
