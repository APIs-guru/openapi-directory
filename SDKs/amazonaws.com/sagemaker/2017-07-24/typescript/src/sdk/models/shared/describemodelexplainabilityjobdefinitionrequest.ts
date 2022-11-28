import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeModelExplainabilityJobDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobDefinitionName" })
  jobDefinitionName: string;
}
