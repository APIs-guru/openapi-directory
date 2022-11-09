import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuthenticationMode } from "./authenticationmode";
import { Tag } from "./tag";


export class CreateUserRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessString" })
  accessString: string;

  @Metadata({ data: "json, name=AuthenticationMode" })
  authenticationMode: AuthenticationMode;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=UserName" })
  userName: string;
}
