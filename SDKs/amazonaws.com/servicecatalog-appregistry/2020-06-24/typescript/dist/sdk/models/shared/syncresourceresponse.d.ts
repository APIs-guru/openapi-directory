import { SpeakeasyBase } from "../../../internal/utils";
import { SyncActionEnum } from "./syncactionenum";
export declare class SyncResourceResponse extends SpeakeasyBase {
    actionTaken?: SyncActionEnum;
    applicationArn?: string;
    resourceArn?: string;
}
