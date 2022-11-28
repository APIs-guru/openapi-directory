import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotifyWorkersFailureCodeEnum } from "./notifyworkersfailurecodeenum";



// NotifyWorkersFailureStatus
/** 
 *  When MTurk encounters an issue with notifying the Workers you specified, it returns back this object with failure details. 
**/
export class NotifyWorkersFailureStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NotifyWorkersFailureCode" })
  notifyWorkersFailureCode?: NotifyWorkersFailureCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=NotifyWorkersFailureMessage" })
  notifyWorkersFailureMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkerId" })
  workerId?: string;
}
