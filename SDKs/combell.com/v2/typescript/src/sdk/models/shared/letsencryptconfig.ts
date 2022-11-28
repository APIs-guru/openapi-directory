import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LetsEncryptConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
