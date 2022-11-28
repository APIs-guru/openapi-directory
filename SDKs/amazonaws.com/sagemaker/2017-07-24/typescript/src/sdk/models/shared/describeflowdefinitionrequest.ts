import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeFlowDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FlowDefinitionName" })
  flowDefinitionName: string;
}
