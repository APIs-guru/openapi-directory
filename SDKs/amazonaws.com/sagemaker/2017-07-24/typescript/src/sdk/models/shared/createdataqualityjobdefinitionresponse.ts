import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateDataQualityJobDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobDefinitionArn" })
  jobDefinitionArn: string;
}
