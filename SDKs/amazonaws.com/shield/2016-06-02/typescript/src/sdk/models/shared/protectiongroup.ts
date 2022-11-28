import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProtectionGroupAggregationEnum } from "./protectiongroupaggregationenum";
import { ProtectionGroupPatternEnum } from "./protectiongrouppatternenum";
import { ProtectedResourceTypeEnum } from "./protectedresourcetypeenum";



// ProtectionGroup
/** 
 * A grouping of protected resources that you and Shield Advanced can monitor as a collective. This resource grouping improves the accuracy of detection and reduces false positives. 
**/
export class ProtectionGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Aggregation" })
  aggregation: ProtectionGroupAggregationEnum;

  @SpeakeasyMetadata({ data: "json, name=Members" })
  members: string[];

  @SpeakeasyMetadata({ data: "json, name=Pattern" })
  pattern: ProtectionGroupPatternEnum;

  @SpeakeasyMetadata({ data: "json, name=ProtectionGroupArn" })
  protectionGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ProtectionGroupId" })
  protectionGroupId: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType?: ProtectedResourceTypeEnum;
}
