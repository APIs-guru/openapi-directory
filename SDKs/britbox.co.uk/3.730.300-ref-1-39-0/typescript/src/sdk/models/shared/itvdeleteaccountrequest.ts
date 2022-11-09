import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItvDeleteAccountRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=profileToken" })
  profileToken: string;
}
