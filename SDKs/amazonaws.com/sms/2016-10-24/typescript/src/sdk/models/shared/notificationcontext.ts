import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ValidationStatusEnum } from "./validationstatusenum";


// NotificationContext
/** 
 * Contains the status of validating an application.
**/
export class NotificationContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: ValidationStatusEnum;

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=validationId" })
  validationId?: string;
}
