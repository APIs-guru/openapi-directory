import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SshKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=pretty-print" })
  prettyPrint?: string;
}
