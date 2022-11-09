import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ByteMatchSet } from "./bytematchset";


export class CreateByteMatchSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ByteMatchSet" })
  byteMatchSet?: ByteMatchSet;

  @Metadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
