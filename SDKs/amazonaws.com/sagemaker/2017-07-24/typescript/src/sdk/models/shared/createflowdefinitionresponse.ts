import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateFlowDefinitionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FlowDefinitionArn" })
  flowDefinitionArn: string;
}
