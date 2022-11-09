import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EeOffersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessToken" })
  accessToken: string;

  @Metadata({ data: "json, name=msisdn" })
  msisdn: string;

  @Metadata({ data: "json, name=trackingHeader" })
  trackingHeader?: string;
}
