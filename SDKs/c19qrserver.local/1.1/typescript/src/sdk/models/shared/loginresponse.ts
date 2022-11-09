import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LoginResponse
/** 
 * Payload of successful login
**/
export class LoginResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=admin" })
  admin?: boolean;

  @Metadata({ data: "json, name=login_id" })
  loginId?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=read_only" })
  readOnly?: boolean;

  @Metadata({ data: "json, name=token" })
  token?: string;
}
