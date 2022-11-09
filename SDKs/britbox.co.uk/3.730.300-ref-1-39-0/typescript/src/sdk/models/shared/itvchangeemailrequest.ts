import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItvChangeEmailRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=profileToken" })
  profileToken: string;
}
