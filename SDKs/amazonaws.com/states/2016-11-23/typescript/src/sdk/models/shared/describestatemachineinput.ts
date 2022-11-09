import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeStateMachineInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=stateMachineArn" })
  stateMachineArn: string;
}
