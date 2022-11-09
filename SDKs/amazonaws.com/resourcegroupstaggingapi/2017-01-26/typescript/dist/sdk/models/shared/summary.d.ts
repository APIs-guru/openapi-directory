import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TargetIdTypeEnum } from "./targetidtypeenum";
/**
 * A count of noncompliant resources.
**/
export declare class Summary extends SpeakeasyBase {
    lastUpdated?: string;
    nonCompliantResources?: number;
    region?: string;
    resourceType?: string;
    targetId?: string;
    targetIdType?: TargetIdTypeEnum;
}
