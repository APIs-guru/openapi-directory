import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";



export class UpdateUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=User" })
  user?: User;
}
