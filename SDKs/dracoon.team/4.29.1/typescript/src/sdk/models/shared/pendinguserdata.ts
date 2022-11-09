import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PendingUserData
/** 
 * Pending user information
**/
export class PendingUserData extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName: string;

  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=login" })
  login: string;
}
