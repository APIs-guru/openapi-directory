import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OfflineStoreStatusValueEnum } from "./offlinestorestatusvalueenum";


// OfflineStoreStatus
/** 
 * The status of <code>OfflineStore</code>.
**/
export class OfflineStoreStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=BlockedReason" })
  blockedReason?: string;

  @Metadata({ data: "json, name=Status" })
  status: OfflineStoreStatusValueEnum;
}
