import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetChangeTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
