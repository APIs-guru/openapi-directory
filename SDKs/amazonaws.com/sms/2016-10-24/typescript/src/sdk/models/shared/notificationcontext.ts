import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ValidationStatusEnum } from "./validationstatusenum";



// NotificationContext
/** 
 * Contains the status of validating an application.
**/
export class NotificationContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ValidationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=validationId" })
  validationId?: string;
}
