import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetTypeEnum } from "./targettypeenum";



// PolicyTargetSummary
/** 
 * Contains information about a root, OU, or account that a policy is attached to.
**/
export class PolicyTargetSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetId" })
  targetId?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: TargetTypeEnum;
}
