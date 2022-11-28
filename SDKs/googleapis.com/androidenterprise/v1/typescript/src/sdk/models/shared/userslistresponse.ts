import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";



export class UsersListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=user", elemType: User })
  user?: User[];
}
