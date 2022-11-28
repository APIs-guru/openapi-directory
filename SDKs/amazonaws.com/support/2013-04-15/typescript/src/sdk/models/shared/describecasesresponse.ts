import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CaseDetails } from "./casedetails";



// DescribeCasesResponse
/** 
 * Returns an array of <a href="https://docs.aws.amazon.com/awssupport/latest/APIReference/API_CaseDetails.html">CaseDetails</a> objects and a <code>nextToken</code> that defines a point for pagination in the result set.
**/
export class DescribeCasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cases", elemType: CaseDetails })
  cases?: CaseDetails[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
