import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotifyWorkersFailureStatus } from "./notifyworkersfailurestatus";



export class NotifyWorkersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NotifyWorkersFailureStatuses", elemType: NotifyWorkersFailureStatus })
  notifyWorkersFailureStatuses?: NotifyWorkersFailureStatus[];
}
