import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateStateMachineOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=updateDate" })
  updateDate: Date;
}
