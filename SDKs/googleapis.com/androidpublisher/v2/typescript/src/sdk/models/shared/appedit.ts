import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AppEdit
/** 
 * Represents an edit of an app. An edit allows clients to make multiple changes before committing them in one operation.
**/
export class AppEdit extends SpeakeasyBase {
  @Metadata({ data: "json, name=expiryTimeSeconds" })
  expiryTimeSeconds?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;
}
