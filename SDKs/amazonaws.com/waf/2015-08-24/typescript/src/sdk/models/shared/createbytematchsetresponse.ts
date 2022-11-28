import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ByteMatchSet } from "./bytematchset";



export class CreateByteMatchSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ByteMatchSet" })
  byteMatchSet?: ByteMatchSet;

  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
