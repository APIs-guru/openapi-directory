import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthenticationMode } from "./authenticationmode";


export class UpdateUserRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessString" })
  accessString?: string;

  @Metadata({ data: "json, name=AuthenticationMode" })
  authenticationMode?: AuthenticationMode;

  @Metadata({ data: "json, name=UserName" })
  userName: string;
}
