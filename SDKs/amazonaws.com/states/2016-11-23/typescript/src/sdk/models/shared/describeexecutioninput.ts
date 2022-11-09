import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeExecutionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=executionArn" })
  executionArn: string;
}
