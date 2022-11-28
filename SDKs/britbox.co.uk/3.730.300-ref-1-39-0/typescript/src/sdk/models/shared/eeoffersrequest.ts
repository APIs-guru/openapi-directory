import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EeOffersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=msisdn" })
  msisdn: string;

  @SpeakeasyMetadata({ data: "json, name=trackingHeader" })
  trackingHeader?: string;
}
