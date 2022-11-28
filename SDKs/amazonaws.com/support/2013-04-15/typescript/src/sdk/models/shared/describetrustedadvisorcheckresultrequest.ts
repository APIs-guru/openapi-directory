import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeTrustedAdvisorCheckResultRequest
/** 
 * <p/>
**/
export class DescribeTrustedAdvisorCheckResultRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checkId" })
  checkId: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;
}
