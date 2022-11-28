import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateSmtpDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: string;
}
