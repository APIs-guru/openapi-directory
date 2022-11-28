import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegistrationStatusEnum } from "./registrationstatusenum";
import { WorkflowType } from "./workflowtype";



// WorkflowTypeInfo
/** 
 * Contains information about a workflow type.
**/
export class WorkflowTypeInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate: Date;

  @SpeakeasyMetadata({ data: "json, name=deprecationDate" })
  deprecationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: RegistrationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=workflowType" })
  workflowType: WorkflowType;
}
