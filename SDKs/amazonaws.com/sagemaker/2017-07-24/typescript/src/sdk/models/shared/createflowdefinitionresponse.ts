import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateFlowDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FlowDefinitionArn" })
  flowDefinitionArn: string;
}
