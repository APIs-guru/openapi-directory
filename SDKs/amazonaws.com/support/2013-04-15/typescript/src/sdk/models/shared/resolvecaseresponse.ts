import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResolveCaseResponse
/** 
 * The status of the case returned by the <a>ResolveCase</a> operation.
**/
export class ResolveCaseResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=finalCaseStatus" })
  finalCaseStatus?: string;

  @Metadata({ data: "json, name=initialCaseStatus" })
  initialCaseStatus?: string;
}
