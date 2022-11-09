import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Api2ControllersWebApiReviewControllerReviewRequest
/** 
 * Payload for reviews
**/
export class Api2ControllersWebApiReviewControllerReviewRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActiveMinutes, form, name=ActiveMinutes;" })
  activeMinutes?: number;

  @Metadata({ data: "json, name=Comment, form, name=Comment;" })
  comment?: string;

  @Metadata({ data: "json, name=MakeAgain, form, name=MakeAgain;" })
  makeAgain?: string;

  @Metadata({ data: "json, name=StarRating, form, name=StarRating;" })
  starRating?: number;

  @Metadata({ data: "json, name=TotalMinutes, form, name=TotalMinutes;" })
  totalMinutes?: number;
}
