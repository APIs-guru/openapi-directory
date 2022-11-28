import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserAuthData } from "./userauthdata";
import { UserAuthMethod } from "./userauthmethod";
import { ObjectExpiration } from "./objectexpiration";



// CreateUserRequest
/** 
 * Request model for creating an user
**/
export class CreateUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authData" })
  authData?: UserAuthData;

  @SpeakeasyMetadata({ data: "json, name=authMethods", elemType: UserAuthMethod })
  authMethods?: UserAuthMethod[];

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=expiration" })
  expiration?: ObjectExpiration;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender?: string;

  @SpeakeasyMetadata({ data: "json, name=isNonmemberViewer" })
  isNonmemberViewer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName: string;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login?: string;

  @SpeakeasyMetadata({ data: "json, name=needsToChangePassword" })
  needsToChangePassword?: boolean;

  @SpeakeasyMetadata({ data: "json, name=notifyUser" })
  notifyUser?: boolean;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=receiverLanguage" })
  receiverLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName?: string;
}
