import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NameServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=ip" })
  ip?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
