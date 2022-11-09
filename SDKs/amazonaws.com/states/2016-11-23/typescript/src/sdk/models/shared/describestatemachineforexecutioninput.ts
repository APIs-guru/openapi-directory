import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeStateMachineForExecutionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=executionArn" })
  executionArn: string;
}
