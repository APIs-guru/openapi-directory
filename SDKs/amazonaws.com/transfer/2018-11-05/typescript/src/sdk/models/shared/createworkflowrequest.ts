import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkflowStep } from "./workflowstep";
import { Tag } from "./tag";



export class CreateWorkflowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=OnExceptionSteps", elemType: WorkflowStep })
  onExceptionSteps?: WorkflowStep[];

  @SpeakeasyMetadata({ data: "json, name=Steps", elemType: WorkflowStep })
  steps: WorkflowStep[];

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
