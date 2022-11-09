import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { User } from "./user";


export class GroupLicenseUsersListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=user", elemType: shared.User })
  user?: User[];
}
