import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeDataQualityJobDefinitionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobDefinitionName" })
  jobDefinitionName: string;
}
