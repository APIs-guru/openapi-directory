import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NestDealer extends SpeakeasyBase {
  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=dealer_type" })
  dealerType?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=latitude" })
  latitude?: string;

  @Metadata({ data: "json, name=longitude" })
  longitude?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=phone" })
  phone?: string;

  @Metadata({ data: "json, name=seller_email" })
  sellerEmail?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=street" })
  street?: string;

  @Metadata({ data: "json, name=website" })
  website?: string;

  @Metadata({ data: "json, name=zip" })
  zip?: string;
}
