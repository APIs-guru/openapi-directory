import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItvChangeEmailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=profileToken" })
  profileToken: string;
}
