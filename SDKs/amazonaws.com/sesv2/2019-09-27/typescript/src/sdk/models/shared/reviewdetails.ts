import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReviewStatusEnum } from "./reviewstatusenum";


// ReviewDetails
/** 
 * An object that contains information about your account details review.
**/
export class ReviewDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=CaseId" })
  caseId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: ReviewStatusEnum;
}
