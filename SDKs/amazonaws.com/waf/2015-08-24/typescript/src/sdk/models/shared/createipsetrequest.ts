import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateIpSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
