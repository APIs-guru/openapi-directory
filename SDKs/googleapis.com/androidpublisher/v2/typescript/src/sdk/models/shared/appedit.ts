import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AppEdit
/** 
 * Represents an edit of an app. An edit allows clients to make multiple changes before committing them in one operation.
**/
export class AppEdit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expiryTimeSeconds" })
  expiryTimeSeconds?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
