import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserAuthData } from "./userauthdata";
import { UserAuthMethod } from "./userauthmethod";
import { ObjectExpiration } from "./objectexpiration";


// CreateUserRequest
/** 
 * Request model for creating an user
**/
export class CreateUserRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=authData" })
  authData?: UserAuthData;

  @Metadata({ data: "json, name=authMethods", elemType: shared.UserAuthMethod })
  authMethods?: UserAuthMethod[];

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=expiration" })
  expiration?: ObjectExpiration;

  @Metadata({ data: "json, name=firstName" })
  firstName: string;

  @Metadata({ data: "json, name=gender" })
  gender?: string;

  @Metadata({ data: "json, name=isNonmemberViewer" })
  isNonmemberViewer?: boolean;

  @Metadata({ data: "json, name=lastName" })
  lastName: string;

  @Metadata({ data: "json, name=login" })
  login?: string;

  @Metadata({ data: "json, name=needsToChangePassword" })
  needsToChangePassword?: boolean;

  @Metadata({ data: "json, name=notifyUser" })
  notifyUser?: boolean;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=phone" })
  phone?: string;

  @Metadata({ data: "json, name=receiverLanguage" })
  receiverLanguage?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=userName" })
  userName?: string;
}
