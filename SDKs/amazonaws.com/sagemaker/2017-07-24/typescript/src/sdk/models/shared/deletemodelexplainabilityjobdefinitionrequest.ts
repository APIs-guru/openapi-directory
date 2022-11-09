import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteModelExplainabilityJobDefinitionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobDefinitionName" })
  jobDefinitionName: string;
}
