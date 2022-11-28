import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserAuthDataUpdateRequest } from "./userauthdataupdaterequest";
import { UserAuthMethod } from "./userauthmethod";
import { ObjectExpiration } from "./objectexpiration";



// UpdateUserRequest
/** 
 * Request model for updating user's metadata
**/
export class UpdateUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authData" })
  authData?: UserAuthDataUpdateRequest;

  @SpeakeasyMetadata({ data: "json, name=authMethods", elemType: UserAuthMethod })
  authMethods?: UserAuthMethod[];

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=expiration" })
  expiration?: ObjectExpiration;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender?: string;

  @SpeakeasyMetadata({ data: "json, name=isLocked" })
  isLocked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=lockStatus" })
  lockStatus?: number;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=receiverLanguage" })
  receiverLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName?: string;
}
