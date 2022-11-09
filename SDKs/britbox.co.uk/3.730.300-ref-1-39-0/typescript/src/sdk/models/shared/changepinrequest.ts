import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ChangePinRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=pin" })
  pin: string;
}
