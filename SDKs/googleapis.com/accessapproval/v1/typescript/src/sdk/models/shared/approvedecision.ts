import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SignatureInfo } from "./signatureinfo";



// ApproveDecision
/** 
 * A decision that has been made to approve access to a resource.
**/
export class ApproveDecision extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approveTime" })
  approveTime?: string;

  @SpeakeasyMetadata({ data: "json, name=autoApproved" })
  autoApproved?: boolean;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=invalidateTime" })
  invalidateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=signatureInfo" })
  signatureInfo?: SignatureInfo;
}
