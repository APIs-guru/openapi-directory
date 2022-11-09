import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProtectionGroupAggregationEnum } from "./protectiongroupaggregationenum";
import { ProtectionGroupPatternEnum } from "./protectiongrouppatternenum";
import { ProtectedResourceTypeEnum } from "./protectedresourcetypeenum";


// ProtectionGroup
/** 
 * A grouping of protected resources that you and Shield Advanced can monitor as a collective. This resource grouping improves the accuracy of detection and reduces false positives. 
**/
export class ProtectionGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=Aggregation" })
  aggregation: ProtectionGroupAggregationEnum;

  @Metadata({ data: "json, name=Members" })
  members: string[];

  @Metadata({ data: "json, name=Pattern" })
  pattern: ProtectionGroupPatternEnum;

  @Metadata({ data: "json, name=ProtectionGroupArn" })
  protectionGroupArn?: string;

  @Metadata({ data: "json, name=ProtectionGroupId" })
  protectionGroupId: string;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: ProtectedResourceTypeEnum;
}
