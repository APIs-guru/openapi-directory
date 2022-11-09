import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LoginRequestAuthTypeEnum {
    Basic = "basic"
,    ActiveDirectory = "active_directory"
,    Radius = "radius"
}


// LoginRequest
/** 
 * Request model for performing an authentication
**/
export class LoginRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=authType" })
  authType?: LoginRequestAuthTypeEnum;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=login" })
  login?: string;

  @Metadata({ data: "json, name=password" })
  password: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=token" })
  token?: string;

  @Metadata({ data: "json, name=userName" })
  userName?: string;
}
