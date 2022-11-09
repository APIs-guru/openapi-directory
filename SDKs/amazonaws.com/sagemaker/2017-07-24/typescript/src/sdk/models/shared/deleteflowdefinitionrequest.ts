import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteFlowDefinitionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=FlowDefinitionName" })
  flowDefinitionName: string;
}
