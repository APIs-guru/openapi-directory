import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateCaseResponse
/** 
 * The support case ID returned by a successful completion of the <a>CreateCase</a> operation.
**/
export class CreateCaseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caseId" })
  caseId?: string;
}
