import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteModelQualityJobDefinitionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobDefinitionName" })
  jobDefinitionName: string;
}
