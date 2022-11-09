import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PasswordResetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password: string;

  @Metadata({ data: "json, name=resetToken" })
  resetToken: string;
}
