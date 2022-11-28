import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteStateMachineInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=stateMachineArn" })
  stateMachineArn: string;
}
