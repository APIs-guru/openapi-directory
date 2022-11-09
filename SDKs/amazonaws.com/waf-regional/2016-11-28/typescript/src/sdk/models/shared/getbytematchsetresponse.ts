import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ByteMatchSet } from "./bytematchset";


export class GetByteMatchSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ByteMatchSet" })
  byteMatchSet?: ByteMatchSet;
}
