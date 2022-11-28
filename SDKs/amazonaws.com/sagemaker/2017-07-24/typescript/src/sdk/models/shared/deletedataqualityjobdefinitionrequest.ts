import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteDataQualityJobDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobDefinitionName" })
  jobDefinitionName: string;
}
