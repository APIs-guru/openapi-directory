import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SshConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
