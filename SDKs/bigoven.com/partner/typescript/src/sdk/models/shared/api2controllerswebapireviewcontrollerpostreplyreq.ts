import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Api2ControllersWebApiReviewControllerPostReplyReq
/** 
 * Reply request parameters
**/
export class Api2ControllersWebApiReviewControllerPostReplyReq extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Comment, form, name=Comment;" })
  comment?: string;
}
