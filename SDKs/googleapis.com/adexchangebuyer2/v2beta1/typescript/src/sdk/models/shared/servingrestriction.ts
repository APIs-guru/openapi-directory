import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServingContext } from "./servingcontext";
import { Disapproval } from "./disapproval";
import { Disapproval } from "./disapproval";

export enum ServingRestrictionStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED"
,    Disapproval = "DISAPPROVAL"
,    PendingReview = "PENDING_REVIEW"
}


// ServingRestriction
/** 
 * Output only. A representation of the status of an ad in a specific context. A context here relates to where something ultimately serves (for example, a user or publisher geo, a platform, an HTTPS versus HTTP request, or the type of auction).
**/
export class ServingRestriction extends SpeakeasyBase {
  @Metadata({ data: "json, name=contexts", elemType: shared.ServingContext })
  contexts?: ServingContext[];

  @Metadata({ data: "json, name=disapproval" })
  disapproval?: Disapproval;

  @Metadata({ data: "json, name=disapprovalReasons", elemType: shared.Disapproval })
  disapprovalReasons?: Disapproval[];

  @Metadata({ data: "json, name=status" })
  status?: ServingRestrictionStatusEnum;
}
