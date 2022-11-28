import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PasswordResetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=resetToken" })
  resetToken: string;
}
