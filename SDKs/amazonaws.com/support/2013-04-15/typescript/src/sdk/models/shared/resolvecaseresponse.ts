import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResolveCaseResponse
/** 
 * The status of the case returned by the <a>ResolveCase</a> operation.
**/
export class ResolveCaseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=finalCaseStatus" })
  finalCaseStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=initialCaseStatus" })
  initialCaseStatus?: string;
}
