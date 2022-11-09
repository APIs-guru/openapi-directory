import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteDataQualityJobDefinitionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobDefinitionName" })
  jobDefinitionName: string;
}
