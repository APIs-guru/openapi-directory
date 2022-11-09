import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeTrustedAdvisorCheckResultRequest
/** 
 * <p/>
**/
export class DescribeTrustedAdvisorCheckResultRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=checkId" })
  checkId: string;

  @Metadata({ data: "json, name=language" })
  language?: string;
}
