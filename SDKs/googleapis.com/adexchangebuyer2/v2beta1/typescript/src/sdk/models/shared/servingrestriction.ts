import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServingContext } from "./servingcontext";
import { Disapproval } from "./disapproval";


export enum ServingRestrictionStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    Disapproval = "DISAPPROVAL",
    PendingReview = "PENDING_REVIEW"
}


// ServingRestriction
/** 
 * Output only. A representation of the status of an ad in a specific context. A context here relates to where something ultimately serves (for example, a user or publisher geo, a platform, an HTTPS versus HTTP request, or the type of auction).
**/
export class ServingRestriction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contexts", elemType: ServingContext })
  contexts?: ServingContext[];

  @SpeakeasyMetadata({ data: "json, name=disapproval" })
  disapproval?: Disapproval;

  @SpeakeasyMetadata({ data: "json, name=disapprovalReasons", elemType: Disapproval })
  disapprovalReasons?: Disapproval[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ServingRestrictionStatusEnum;
}
