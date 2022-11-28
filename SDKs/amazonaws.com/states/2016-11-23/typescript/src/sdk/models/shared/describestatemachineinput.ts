import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeStateMachineInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=stateMachineArn" })
  stateMachineArn: string;
}
