import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ByteMatchSetUpdate } from "./bytematchsetupdate";


export class UpdateByteMatchSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ByteMatchSetId" })
  byteMatchSetId: string;

  @Metadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @Metadata({ data: "json, name=Updates", elemType: shared.ByteMatchSetUpdate })
  updates: ByteMatchSetUpdate[];
}
