import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateSmtpDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
