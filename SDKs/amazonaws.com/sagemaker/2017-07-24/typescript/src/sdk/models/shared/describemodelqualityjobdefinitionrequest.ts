import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeModelQualityJobDefinitionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobDefinitionName" })
  jobDefinitionName: string;
}
