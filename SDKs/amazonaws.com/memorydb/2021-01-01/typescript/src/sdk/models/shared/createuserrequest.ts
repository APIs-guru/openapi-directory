import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationMode } from "./authenticationmode";
import { Tag } from "./tag";



export class CreateUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessString" })
  accessString: string;

  @SpeakeasyMetadata({ data: "json, name=AuthenticationMode" })
  authenticationMode: AuthenticationMode;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=UserName" })
  userName: string;
}
