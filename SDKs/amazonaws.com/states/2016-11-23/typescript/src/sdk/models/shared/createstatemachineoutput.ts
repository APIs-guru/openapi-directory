import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateStateMachineOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDate" })
  creationDate: Date;

  @Metadata({ data: "json, name=stateMachineArn" })
  stateMachineArn: string;
}
