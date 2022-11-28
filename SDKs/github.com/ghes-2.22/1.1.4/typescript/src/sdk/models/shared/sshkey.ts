import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SshKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=pretty-print" })
  prettyPrint?: string;
}
