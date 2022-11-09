import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { User } from "./user";


export class UpdateUserResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=User" })
  user?: User;
}
