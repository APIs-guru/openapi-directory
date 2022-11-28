import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReviewActionStatusEnum } from "./reviewactionstatusenum";



// ReviewActionDetail
/** 
 *  Both the AssignmentReviewReport and the HITReviewReport elements contains the ReviewActionDetail data structure. This structure is returned multiple times for each action specified in the Review Policy. 
**/
export class ReviewActionDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActionId" })
  actionId?: string;

  @SpeakeasyMetadata({ data: "json, name=ActionName" })
  actionName?: string;

  @SpeakeasyMetadata({ data: "json, name=CompleteTime" })
  completeTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=Result" })
  result?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ReviewActionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=TargetId" })
  targetId?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetType" })
  targetType?: string;
}
