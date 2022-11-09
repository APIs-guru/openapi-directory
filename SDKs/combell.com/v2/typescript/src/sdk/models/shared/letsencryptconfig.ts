import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LetsEncryptConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
