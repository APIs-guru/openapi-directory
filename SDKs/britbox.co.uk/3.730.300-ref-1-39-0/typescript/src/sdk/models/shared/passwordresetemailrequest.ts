import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PasswordResetEmailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;
}
