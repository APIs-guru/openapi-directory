import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EeValidatePinRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessToken" })
  accessToken: string;

  @Metadata({ data: "json, name=pin" })
  pin: string;

  @Metadata({ data: "json, name=pinReference" })
  pinReference: string;

  @Metadata({ data: "json, name=trackingHeader" })
  trackingHeader?: string;
}
