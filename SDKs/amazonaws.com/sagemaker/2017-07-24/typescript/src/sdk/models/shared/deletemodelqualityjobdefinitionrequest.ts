import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteModelQualityJobDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobDefinitionName" })
  jobDefinitionName: string;
}
