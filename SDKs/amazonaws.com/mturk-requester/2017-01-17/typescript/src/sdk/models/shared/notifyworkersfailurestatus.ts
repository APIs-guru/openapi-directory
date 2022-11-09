import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NotifyWorkersFailureCodeEnum } from "./notifyworkersfailurecodeenum";


// NotifyWorkersFailureStatus
/** 
 *  When MTurk encounters an issue with notifying the Workers you specified, it returns back this object with failure details. 
**/
export class NotifyWorkersFailureStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=NotifyWorkersFailureCode" })
  notifyWorkersFailureCode?: NotifyWorkersFailureCodeEnum;

  @Metadata({ data: "json, name=NotifyWorkersFailureMessage" })
  notifyWorkersFailureMessage?: string;

  @Metadata({ data: "json, name=WorkerId" })
  workerId?: string;
}
