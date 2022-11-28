import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChangePasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=profileToken" })
  profileToken: string;
}
