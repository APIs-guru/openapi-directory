import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TargetTypeEnum } from "./targettypeenum";


// PolicyTargetSummary
/** 
 * Contains information about a root, OU, or account that a policy is attached to.
**/
export class PolicyTargetSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=TargetId" })
  targetId?: string;

  @Metadata({ data: "json, name=Type" })
  type?: TargetTypeEnum;
}
