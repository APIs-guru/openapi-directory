import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComplianceStatusEnum } from "./compliancestatusenum";
import { StatusReason } from "./statusreason";



// Compliance
/** 
 * Contains finding details that are specific to control-based findings. Only returned for findings generated from controls.
**/
export class Compliance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RelatedRequirements" })
  relatedRequirements?: string[];

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ComplianceStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusReasons", elemType: StatusReason })
  statusReasons?: StatusReason[];
}
