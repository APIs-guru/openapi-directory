import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AllowedOperationEnum } from "./allowedoperationenum";
import { ReceivedStatusEnum } from "./receivedstatusenum";


// ReceivedMetadata
/** 
 * Metadata associated with received licenses and grants.
**/
export class ReceivedMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowedOperations" })
  allowedOperations?: AllowedOperationEnum[];

  @Metadata({ data: "json, name=ReceivedStatus" })
  receivedStatus?: ReceivedStatusEnum;

  @Metadata({ data: "json, name=ReceivedStatusReason" })
  receivedStatusReason?: string;
}
