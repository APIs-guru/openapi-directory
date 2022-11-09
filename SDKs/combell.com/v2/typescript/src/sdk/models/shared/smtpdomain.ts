import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SmtpDomain extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=hostname" })
  hostname?: string;
}
