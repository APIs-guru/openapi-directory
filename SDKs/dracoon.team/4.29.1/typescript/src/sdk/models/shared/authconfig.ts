import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuthMethod } from "./authmethod";


// AuthConfig
/** 
 * Authentication settings
**/
export class AuthConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=authMethods", elemType: shared.AuthMethod })
  authMethods: AuthMethod[];
}
