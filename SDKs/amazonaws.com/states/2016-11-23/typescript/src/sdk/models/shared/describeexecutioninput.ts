import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeExecutionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executionArn" })
  executionArn: string;
}
