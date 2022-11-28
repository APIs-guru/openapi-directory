import { SpeakeasyBase } from "../../../internal/utils";
import { NotifyWorkersFailureCodeEnum } from "./notifyworkersfailurecodeenum";
/**
 *  When MTurk encounters an issue with notifying the Workers you specified, it returns back this object with failure details.
**/
export declare class NotifyWorkersFailureStatus extends SpeakeasyBase {
    notifyWorkersFailureCode?: NotifyWorkersFailureCodeEnum;
    notifyWorkersFailureMessage?: string;
    workerId?: string;
}
