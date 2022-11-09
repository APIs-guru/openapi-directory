import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeyValueEntry } from "./keyvalueentry";


// UserAuthMethod
/** 
 * Authentication method
**/
export class UserAuthMethod extends SpeakeasyBase {
  @Metadata({ data: "json, name=authId" })
  authId: string;

  @Metadata({ data: "json, name=isEnabled" })
  isEnabled: boolean;

  @Metadata({ data: "json, name=options", elemType: shared.KeyValueEntry })
  options?: KeyValueEntry[];
}
