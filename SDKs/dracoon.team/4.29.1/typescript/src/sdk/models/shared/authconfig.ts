import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthMethod } from "./authmethod";



// AuthConfig
/** 
 * Authentication settings
**/
export class AuthConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authMethods", elemType: AuthMethod })
  authMethods: AuthMethod[];
}
