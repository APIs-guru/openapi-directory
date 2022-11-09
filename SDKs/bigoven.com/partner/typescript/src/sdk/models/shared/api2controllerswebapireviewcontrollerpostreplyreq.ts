import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Api2ControllersWebApiReviewControllerPostReplyReq
/** 
 * Reply request parameters
**/
export class Api2ControllersWebApiReviewControllerPostReplyReq extends SpeakeasyBase {
  @Metadata({ data: "json, name=Comment, form, name=Comment;" })
  comment?: string;
}
