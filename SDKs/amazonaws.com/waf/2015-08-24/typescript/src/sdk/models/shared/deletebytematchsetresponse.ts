import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteByteMatchSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
