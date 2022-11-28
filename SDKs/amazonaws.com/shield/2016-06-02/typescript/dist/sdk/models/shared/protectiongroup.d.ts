import { SpeakeasyBase } from "../../../internal/utils";
import { ProtectionGroupAggregationEnum } from "./protectiongroupaggregationenum";
import { ProtectionGroupPatternEnum } from "./protectiongrouppatternenum";
import { ProtectedResourceTypeEnum } from "./protectedresourcetypeenum";
/**
 * A grouping of protected resources that you and Shield Advanced can monitor as a collective. This resource grouping improves the accuracy of detection and reduces false positives.
**/
export declare class ProtectionGroup extends SpeakeasyBase {
    aggregation: ProtectionGroupAggregationEnum;
    members: string[];
    pattern: ProtectionGroupPatternEnum;
    protectionGroupArn?: string;
    protectionGroupId: string;
    resourceType?: ProtectedResourceTypeEnum;
}
