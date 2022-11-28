import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LoginResponse
/** 
 * Payload of successful login
**/
export class LoginResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admin" })
  admin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=login_id" })
  loginId?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=read_only" })
  readOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}
