import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateByteMatchSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
