import { SpeakeasyBase } from "../../../internal/utils";
import { EntityStateEnum } from "./entitystateenum";
import { ResourceTypeEnum } from "./resourcetypeenum";
/**
 * The representation of a resource.
**/
export declare class Resource extends SpeakeasyBase {
    disabledDate?: Date;
    email?: string;
    enabledDate?: Date;
    id?: string;
    name?: string;
    state?: EntityStateEnum;
    type?: ResourceTypeEnum;
}
