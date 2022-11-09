import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeModelBiasJobDefinitionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobDefinitionName" })
  jobDefinitionName: string;
}
