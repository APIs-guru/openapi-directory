import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkflowStep } from "./workflowstep";
import { Tag } from "./tag";



// DescribedWorkflow
/** 
 * Describes the properties of the specified workflow
**/
export class DescribedWorkflow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=OnExceptionSteps", elemType: WorkflowStep })
  onExceptionSteps?: WorkflowStep[];

  @SpeakeasyMetadata({ data: "json, name=Steps", elemType: WorkflowStep })
  steps?: WorkflowStep[];

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=WorkflowId" })
  workflowId?: string;
}
