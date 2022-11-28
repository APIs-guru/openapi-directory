import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateStateMachineOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate: Date;

  @SpeakeasyMetadata({ data: "json, name=stateMachineArn" })
  stateMachineArn: string;
}
