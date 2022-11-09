import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NewAddressRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password: string;
}
