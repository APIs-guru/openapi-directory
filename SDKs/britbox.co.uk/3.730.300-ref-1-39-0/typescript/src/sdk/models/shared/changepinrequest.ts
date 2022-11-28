import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChangePinRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pin" })
  pin: string;
}
