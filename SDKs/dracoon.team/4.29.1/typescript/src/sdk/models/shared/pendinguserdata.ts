import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PendingUserData
/** 
 * Pending user information
**/
export class PendingUserData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login: string;
}
