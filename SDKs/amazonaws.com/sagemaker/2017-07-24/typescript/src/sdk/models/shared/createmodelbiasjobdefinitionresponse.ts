import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateModelBiasJobDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobDefinitionArn" })
  jobDefinitionArn: string;
}
