import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteIpSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
