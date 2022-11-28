import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AllowedOperationEnum } from "./allowedoperationenum";
import { ReceivedStatusEnum } from "./receivedstatusenum";



// ReceivedMetadata
/** 
 * Metadata associated with received licenses and grants.
**/
export class ReceivedMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowedOperations" })
  allowedOperations?: AllowedOperationEnum[];

  @SpeakeasyMetadata({ data: "json, name=ReceivedStatus" })
  receivedStatus?: ReceivedStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ReceivedStatusReason" })
  receivedStatusReason?: string;
}
