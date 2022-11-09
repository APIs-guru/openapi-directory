import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItvAssignBtTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=profileToken" })
  profileToken: string;

  @Metadata({ data: "json, name=token" })
  token: string;
}
