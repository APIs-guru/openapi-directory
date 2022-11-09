import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteStateMachineInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=stateMachineArn" })
  stateMachineArn: string;
}
