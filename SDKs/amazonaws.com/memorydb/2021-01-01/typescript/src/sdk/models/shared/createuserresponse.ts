import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { User } from "./user";


export class CreateUserResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=User" })
  user?: User;
}
