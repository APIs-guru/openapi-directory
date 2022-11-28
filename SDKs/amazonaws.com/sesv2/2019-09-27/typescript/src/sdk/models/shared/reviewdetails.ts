import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReviewStatusEnum } from "./reviewstatusenum";



// ReviewDetails
/** 
 * An object that contains information about your account details review.
**/
export class ReviewDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CaseId" })
  caseId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ReviewStatusEnum;
}
