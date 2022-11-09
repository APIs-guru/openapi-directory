import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ChangePasswordRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password: string;

  @Metadata({ data: "json, name=profileToken" })
  profileToken: string;
}
