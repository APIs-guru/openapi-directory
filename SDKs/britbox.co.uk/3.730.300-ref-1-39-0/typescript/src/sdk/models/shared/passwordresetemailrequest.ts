import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PasswordResetEmailRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email: string;
}
