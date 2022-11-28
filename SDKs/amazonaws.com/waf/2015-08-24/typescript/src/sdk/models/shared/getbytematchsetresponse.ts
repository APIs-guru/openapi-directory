import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ByteMatchSet } from "./bytematchset";



export class GetByteMatchSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ByteMatchSet" })
  byteMatchSet?: ByteMatchSet;
}
