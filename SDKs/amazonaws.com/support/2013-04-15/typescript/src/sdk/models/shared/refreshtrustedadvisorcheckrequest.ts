import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RefreshTrustedAdvisorCheckRequest
/** 
 * <p/>
**/
export class RefreshTrustedAdvisorCheckRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checkId" })
  checkId: string;
}
