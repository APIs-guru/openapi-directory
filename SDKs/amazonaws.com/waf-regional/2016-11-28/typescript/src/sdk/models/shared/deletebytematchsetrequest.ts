import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteByteMatchSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ByteMatchSetId" })
  byteMatchSetId: string;

  @Metadata({ data: "json, name=ChangeToken" })
  changeToken: string;
}
