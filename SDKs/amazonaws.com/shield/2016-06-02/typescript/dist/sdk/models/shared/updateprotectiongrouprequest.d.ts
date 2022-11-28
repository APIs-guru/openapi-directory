import { SpeakeasyBase } from "../../../internal/utils";
import { ProtectionGroupAggregationEnum } from "./protectiongroupaggregationenum";
import { ProtectionGroupPatternEnum } from "./protectiongrouppatternenum";
import { ProtectedResourceTypeEnum } from "./protectedresourcetypeenum";
export declare class UpdateProtectionGroupRequest extends SpeakeasyBase {
    aggregation: ProtectionGroupAggregationEnum;
    members?: string[];
    pattern: ProtectionGroupPatternEnum;
    protectionGroupId: string;
    resourceType?: ProtectedResourceTypeEnum;
}
