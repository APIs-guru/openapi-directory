import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeModelExplainabilityJobDefinitionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobDefinitionName" })
  jobDefinitionName: string;
}
