import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EntityStateEnum } from "./entitystateenum";
export declare class DescribeGroupResponse extends SpeakeasyBase {
    disabledDate?: Date;
    email?: string;
    enabledDate?: Date;
    groupId?: string;
    name?: string;
    state?: EntityStateEnum;
}
