import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetChangeTokenStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken: string;
}
