import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateSmtpDomainRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=hostname" })
  hostname?: string;
}
