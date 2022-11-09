import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WorkflowStep } from "./workflowstep";
import { WorkflowStep } from "./workflowstep";
import { Tag } from "./tag";


// DescribedWorkflow
/** 
 * Describes the properties of the specified workflow
**/
export class DescribedWorkflow extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=OnExceptionSteps", elemType: shared.WorkflowStep })
  onExceptionSteps?: WorkflowStep[];

  @Metadata({ data: "json, name=Steps", elemType: shared.WorkflowStep })
  steps?: WorkflowStep[];

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=WorkflowId" })
  workflowId?: string;
}
