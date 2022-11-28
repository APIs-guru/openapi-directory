import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OfflineStoreStatusValueEnum } from "./offlinestorestatusvalueenum";



// OfflineStoreStatus
/** 
 * The status of <code>OfflineStore</code>.
**/
export class OfflineStoreStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BlockedReason" })
  blockedReason?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: OfflineStoreStatusValueEnum;
}
