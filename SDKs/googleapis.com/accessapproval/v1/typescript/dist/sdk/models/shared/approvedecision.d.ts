import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SignatureInfo } from "./signatureinfo";
/**
 * A decision that has been made to approve access to a resource.
**/
export declare class ApproveDecision extends SpeakeasyBase {
    approveTime?: string;
    autoApproved?: boolean;
    expireTime?: string;
    invalidateTime?: string;
    signatureInfo?: SignatureInfo;
}
