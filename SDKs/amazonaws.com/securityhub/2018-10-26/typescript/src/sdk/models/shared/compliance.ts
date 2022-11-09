import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ComplianceStatusEnum } from "./compliancestatusenum";
import { StatusReason } from "./statusreason";


// Compliance
/** 
 * Contains finding details that are specific to control-based findings. Only returned for findings generated from controls.
**/
export class Compliance extends SpeakeasyBase {
  @Metadata({ data: "json, name=RelatedRequirements" })
  relatedRequirements?: string[];

  @Metadata({ data: "json, name=Status" })
  status?: ComplianceStatusEnum;

  @Metadata({ data: "json, name=StatusReasons", elemType: shared.StatusReason })
  statusReasons?: StatusReason[];
}
