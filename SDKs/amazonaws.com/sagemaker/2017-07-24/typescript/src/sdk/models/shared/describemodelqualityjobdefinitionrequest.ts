import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeModelQualityJobDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobDefinitionName" })
  jobDefinitionName: string;
}
