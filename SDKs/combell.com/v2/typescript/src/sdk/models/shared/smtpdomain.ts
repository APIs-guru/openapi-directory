import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SmtpDomain extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: string;
}
