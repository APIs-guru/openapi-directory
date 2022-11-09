import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NewAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=ethereumaddress" })
  ethereumaddress: string;

  @Metadata({ data: "json, name=ok" })
  ok: boolean;

  @Metadata({ data: "json, name=password" })
  password: string;
}
