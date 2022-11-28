import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationMode } from "./authenticationmode";



export class UpdateUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessString" })
  accessString?: string;

  @SpeakeasyMetadata({ data: "json, name=AuthenticationMode" })
  authenticationMode?: AuthenticationMode;

  @SpeakeasyMetadata({ data: "json, name=UserName" })
  userName: string;
}
