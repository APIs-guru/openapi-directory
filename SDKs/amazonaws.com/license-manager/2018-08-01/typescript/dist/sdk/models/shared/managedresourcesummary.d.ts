import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
/**
 * Summary information about a managed resource.
**/
export declare class ManagedResourceSummary extends SpeakeasyBase {
    associationCount?: number;
    resourceType?: ResourceTypeEnum;
}
