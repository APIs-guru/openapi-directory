import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ByteMatchSetUpdate } from "./bytematchsetupdate";



export class UpdateByteMatchSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ByteMatchSetId" })
  byteMatchSetId: string;

  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @SpeakeasyMetadata({ data: "json, name=Updates", elemType: ByteMatchSetUpdate })
  updates: ByteMatchSetUpdate[];
}
