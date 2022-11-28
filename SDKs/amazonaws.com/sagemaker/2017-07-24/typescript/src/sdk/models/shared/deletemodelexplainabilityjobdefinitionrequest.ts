import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteModelExplainabilityJobDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobDefinitionName" })
  jobDefinitionName: string;
}
