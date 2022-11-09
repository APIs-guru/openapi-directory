import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CaseDetails } from "./casedetails";
/**
 * Returns an array of <a href="https://docs.aws.amazon.com/awssupport/latest/APIReference/API_CaseDetails.html">CaseDetails</a> objects and a <code>nextToken</code> that defines a point for pagination in the result set.
**/
export declare class DescribeCasesResponse extends SpeakeasyBase {
    cases?: CaseDetails[];
    nextToken?: string;
}
