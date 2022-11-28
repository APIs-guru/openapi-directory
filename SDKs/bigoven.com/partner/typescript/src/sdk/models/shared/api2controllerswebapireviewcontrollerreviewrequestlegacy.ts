import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Api2ControllersWebApiReviewControllerReviewRequestLegacy
/** 
 * Legacy -- This object here is deprecated. Please use the new "ReviewRequest" structure for all future development
**/
export class Api2ControllersWebApiReviewControllerReviewRequestLegacy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActiveMinutes, form, name=ActiveMinutes;" })
  activeMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=Comment, form, name=Comment;" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=GUID, form, name=GUID;" })
  guid?: string;

  @SpeakeasyMetadata({ data: "json, name=MakeAgain, form, name=MakeAgain;" })
  makeAgain?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentID, form, name=ParentID;" })
  parentId?: number;

  @SpeakeasyMetadata({ data: "json, name=StarRating, form, name=StarRating;" })
  starRating?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalMinutes, form, name=TotalMinutes;" })
  totalMinutes?: number;
}
