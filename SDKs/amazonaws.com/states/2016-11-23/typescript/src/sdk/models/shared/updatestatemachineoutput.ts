import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateStateMachineOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=updateDate" })
  updateDate: Date;
}
