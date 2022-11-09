import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReviewActionStatusEnum } from "./reviewactionstatusenum";


// ReviewActionDetail
/** 
 *  Both the AssignmentReviewReport and the HITReviewReport elements contains the ReviewActionDetail data structure. This structure is returned multiple times for each action specified in the Review Policy. 
**/
export class ReviewActionDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActionId" })
  actionId?: string;

  @Metadata({ data: "json, name=ActionName" })
  actionName?: string;

  @Metadata({ data: "json, name=CompleteTime" })
  completeTime?: Date;

  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=Result" })
  result?: string;

  @Metadata({ data: "json, name=Status" })
  status?: ReviewActionStatusEnum;

  @Metadata({ data: "json, name=TargetId" })
  targetId?: string;

  @Metadata({ data: "json, name=TargetType" })
  targetType?: string;
}
