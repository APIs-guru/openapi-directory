import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateAppResult
/** 
 * Contains the response to a <code>CreateApp</code> request.
**/
export class CreateAppResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppId" })
  appId?: string;
}
