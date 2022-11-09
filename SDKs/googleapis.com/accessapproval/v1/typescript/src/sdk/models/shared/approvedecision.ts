import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SignatureInfo } from "./signatureinfo";


// ApproveDecision
/** 
 * A decision that has been made to approve access to a resource.
**/
export class ApproveDecision extends SpeakeasyBase {
  @Metadata({ data: "json, name=approveTime" })
  approveTime?: string;

  @Metadata({ data: "json, name=autoApproved" })
  autoApproved?: boolean;

  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @Metadata({ data: "json, name=invalidateTime" })
  invalidateTime?: string;

  @Metadata({ data: "json, name=signatureInfo" })
  signatureInfo?: SignatureInfo;
}
