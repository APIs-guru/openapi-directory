import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=deleted" })
  deleted: boolean;

  @Metadata({ data: "json, name=ethereumaddress" })
  ethereumaddress: string;

  @Metadata({ data: "json, name=ok" })
  ok: boolean;
}
