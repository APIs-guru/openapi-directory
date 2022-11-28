import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DescribedWorkflow } from "./describedworkflow";



export class DescribeWorkflowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Workflow" })
  workflow: DescribedWorkflow;
}
