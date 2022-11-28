import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateModelExplainabilityJobDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobDefinitionArn" })
  jobDefinitionArn: string;
}
