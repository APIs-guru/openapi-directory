import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DescribedWorkflow } from "./describedworkflow";


export class DescribeWorkflowResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Workflow" })
  workflow: DescribedWorkflow;
}
