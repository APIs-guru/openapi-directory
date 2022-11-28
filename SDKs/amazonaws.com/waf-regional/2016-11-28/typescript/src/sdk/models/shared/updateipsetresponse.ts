import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateIpSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
