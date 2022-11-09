import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BookingOptions } from "./bookingoptions";
import { EntityStateEnum } from "./entitystateenum";
import { ResourceTypeEnum } from "./resourcetypeenum";
export declare class DescribeResourceResponse extends SpeakeasyBase {
    bookingOptions?: BookingOptions;
    disabledDate?: Date;
    email?: string;
    enabledDate?: Date;
    name?: string;
    resourceId?: string;
    state?: EntityStateEnum;
    type?: ResourceTypeEnum;
}
