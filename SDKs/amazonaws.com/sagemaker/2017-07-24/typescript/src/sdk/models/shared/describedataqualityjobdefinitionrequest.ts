import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeDataQualityJobDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobDefinitionName" })
  jobDefinitionName: string;
}
