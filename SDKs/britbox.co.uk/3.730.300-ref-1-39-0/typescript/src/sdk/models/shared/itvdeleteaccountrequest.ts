import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItvDeleteAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=profileToken" })
  profileToken: string;
}
