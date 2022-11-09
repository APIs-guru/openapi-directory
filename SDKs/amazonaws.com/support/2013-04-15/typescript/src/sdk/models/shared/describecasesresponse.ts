import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CaseDetails } from "./casedetails";


// DescribeCasesResponse
/** 
 * Returns an array of <a href="https://docs.aws.amazon.com/awssupport/latest/APIReference/API_CaseDetails.html">CaseDetails</a> objects and a <code>nextToken</code> that defines a point for pagination in the result set.
**/
export class DescribeCasesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cases", elemType: shared.CaseDetails })
  cases?: CaseDetails[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
