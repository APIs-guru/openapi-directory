import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LoginRequestAuthTypeEnum {
    Basic = "basic",
    ActiveDirectory = "active_directory",
    Radius = "radius"
}


// LoginRequest
/** 
 * Request model for performing an authentication
**/
export class LoginRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authType" })
  authType?: LoginRequestAuthTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName?: string;
}
