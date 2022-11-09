import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetChangeTokenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
