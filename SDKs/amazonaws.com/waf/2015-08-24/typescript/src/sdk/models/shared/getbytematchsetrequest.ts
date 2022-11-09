import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetByteMatchSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ByteMatchSetId" })
  byteMatchSetId: string;
}
