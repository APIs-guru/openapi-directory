import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SshConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
