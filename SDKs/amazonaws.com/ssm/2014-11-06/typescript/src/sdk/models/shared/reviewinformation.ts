import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReviewStatusEnum } from "./reviewstatusenum";


// ReviewInformation
/** 
 * Information about the result of a document review request.
**/
export class ReviewInformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReviewedTime" })
  reviewedTime?: Date;

  @Metadata({ data: "json, name=Reviewer" })
  reviewer?: string;

  @Metadata({ data: "json, name=Status" })
  status?: ReviewStatusEnum;
}
