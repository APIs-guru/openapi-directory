import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateModelQualityJobDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobDefinitionArn" })
  jobDefinitionArn: string;
}
