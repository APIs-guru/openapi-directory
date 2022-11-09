import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NotifyWorkersFailureStatus } from "./notifyworkersfailurestatus";


export class NotifyWorkersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NotifyWorkersFailureStatuses", elemType: shared.NotifyWorkersFailureStatus })
  notifyWorkersFailureStatuses?: NotifyWorkersFailureStatus[];
}
