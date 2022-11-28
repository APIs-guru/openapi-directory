import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Api2ControllersWebApiReviewControllerReviewRequest
/** 
 * Payload for reviews
**/
export class Api2ControllersWebApiReviewControllerReviewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActiveMinutes, form, name=ActiveMinutes;" })
  activeMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=Comment, form, name=Comment;" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=MakeAgain, form, name=MakeAgain;" })
  makeAgain?: string;

  @SpeakeasyMetadata({ data: "json, name=StarRating, form, name=StarRating;" })
  starRating?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalMinutes, form, name=TotalMinutes;" })
  totalMinutes?: number;
}
