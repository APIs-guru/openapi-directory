import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetByteMatchSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ByteMatchSetId" })
  byteMatchSetId: string;
}
