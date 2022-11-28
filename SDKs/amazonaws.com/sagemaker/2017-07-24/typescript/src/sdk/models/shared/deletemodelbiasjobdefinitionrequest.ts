import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteModelBiasJobDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobDefinitionName" })
  jobDefinitionName: string;
}
