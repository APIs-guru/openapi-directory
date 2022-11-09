import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeFlowDefinitionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=FlowDefinitionName" })
  flowDefinitionName: string;
}
