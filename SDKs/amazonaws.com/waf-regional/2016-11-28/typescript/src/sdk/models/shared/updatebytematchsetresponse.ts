import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateByteMatchSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
