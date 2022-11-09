import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteModelBiasJobDefinitionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobDefinitionName" })
  jobDefinitionName: string;
}
