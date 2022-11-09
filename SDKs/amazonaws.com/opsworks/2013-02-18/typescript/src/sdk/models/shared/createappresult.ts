import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateAppResult
/** 
 * Contains the response to a <code>CreateApp</code> request.
**/
export class CreateAppResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppId" })
  appId?: string;
}
