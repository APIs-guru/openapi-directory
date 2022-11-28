import { SpeakeasyBase } from "../../../internal/utils";
import { ComplianceStatusEnum } from "./compliancestatusenum";
import { StatusReason } from "./statusreason";
/**
 * Contains finding details that are specific to control-based findings. Only returned for findings generated from controls.
**/
export declare class Compliance extends SpeakeasyBase {
    relatedRequirements?: string[];
    status?: ComplianceStatusEnum;
    statusReasons?: StatusReason[];
}
