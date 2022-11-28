import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FtpConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
