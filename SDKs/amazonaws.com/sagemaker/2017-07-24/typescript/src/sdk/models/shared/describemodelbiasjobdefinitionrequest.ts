import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeModelBiasJobDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobDefinitionName" })
  jobDefinitionName: string;
}
