import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserAuthDataUpdateRequest } from "./userauthdataupdaterequest";
import { UserAuthMethod } from "./userauthmethod";
import { ObjectExpiration } from "./objectexpiration";


// UpdateUserRequest
/** 
 * Request model for updating user's metadata
**/
export class UpdateUserRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=authData" })
  authData?: UserAuthDataUpdateRequest;

  @Metadata({ data: "json, name=authMethods", elemType: shared.UserAuthMethod })
  authMethods?: UserAuthMethod[];

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=expiration" })
  expiration?: ObjectExpiration;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=gender" })
  gender?: string;

  @Metadata({ data: "json, name=isLocked" })
  isLocked?: boolean;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=lockStatus" })
  lockStatus?: number;

  @Metadata({ data: "json, name=phone" })
  phone?: string;

  @Metadata({ data: "json, name=receiverLanguage" })
  receiverLanguage?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=userName" })
  userName?: string;
}
