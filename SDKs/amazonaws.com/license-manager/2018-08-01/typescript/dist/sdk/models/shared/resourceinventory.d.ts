import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
/**
 * Details about a resource.
**/
export declare class ResourceInventory extends SpeakeasyBase {
    platform?: string;
    platformVersion?: string;
    resourceArn?: string;
    resourceId?: string;
    resourceOwningAccountId?: string;
    resourceType?: ResourceTypeEnum;
}
