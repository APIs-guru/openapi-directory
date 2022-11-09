import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateCaseResponse
/** 
 * The support case ID returned by a successful completion of the <a>CreateCase</a> operation.
**/
export class CreateCaseResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=caseId" })
  caseId?: string;
}
