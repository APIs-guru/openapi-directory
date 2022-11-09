import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RegistrationStatusEnum } from "./registrationstatusenum";
import { WorkflowType } from "./workflowtype";


// WorkflowTypeInfo
/** 
 * Contains information about a workflow type.
**/
export class WorkflowTypeInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDate" })
  creationDate: Date;

  @Metadata({ data: "json, name=deprecationDate" })
  deprecationDate?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=status" })
  status: RegistrationStatusEnum;

  @Metadata({ data: "json, name=workflowType" })
  workflowType: WorkflowType;
}
