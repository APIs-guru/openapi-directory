import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteByteMatchSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ByteMatchSetId" })
  byteMatchSetId: string;

  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken: string;
}
