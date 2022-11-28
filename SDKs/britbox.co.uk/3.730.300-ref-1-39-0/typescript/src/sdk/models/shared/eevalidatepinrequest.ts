import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EeValidatePinRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=pin" })
  pin: string;

  @SpeakeasyMetadata({ data: "json, name=pinReference" })
  pinReference: string;

  @SpeakeasyMetadata({ data: "json, name=trackingHeader" })
  trackingHeader?: string;
}
