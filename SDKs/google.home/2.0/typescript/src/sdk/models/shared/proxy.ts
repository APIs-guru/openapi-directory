import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Proxy extends SpeakeasyBase {
  @Metadata({ data: "json, name=mode" })
  mode: string;
}
