import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeStateMachineForExecutionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executionArn" })
  executionArn: string;
}
