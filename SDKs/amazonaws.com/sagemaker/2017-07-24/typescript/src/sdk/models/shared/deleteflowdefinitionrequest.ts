import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteFlowDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FlowDefinitionName" })
  flowDefinitionName: string;
}
