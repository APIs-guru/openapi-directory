import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Api2ControllersWebApiReviewControllerReviewRequestLegacy
/** 
 * Legacy -- This object here is deprecated. Please use the new "ReviewRequest" structure for all future development
**/
export class Api2ControllersWebApiReviewControllerReviewRequestLegacy extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActiveMinutes, form, name=ActiveMinutes;" })
  activeMinutes?: number;

  @Metadata({ data: "json, name=Comment, form, name=Comment;" })
  comment?: string;

  @Metadata({ data: "json, name=GUID, form, name=GUID;" })
  guid?: string;

  @Metadata({ data: "json, name=MakeAgain, form, name=MakeAgain;" })
  makeAgain?: string;

  @Metadata({ data: "json, name=ParentID, form, name=ParentID;" })
  parentId?: number;

  @Metadata({ data: "json, name=StarRating, form, name=StarRating;" })
  starRating?: number;

  @Metadata({ data: "json, name=TotalMinutes, form, name=TotalMinutes;" })
  totalMinutes?: number;
}
