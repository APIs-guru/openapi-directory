import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReviewStatusEnum } from "./reviewstatusenum";



// ReviewInformation
/** 
 * Information about the result of a document review request.
**/
export class ReviewInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReviewedTime" })
  reviewedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Reviewer" })
  reviewer?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ReviewStatusEnum;
}
