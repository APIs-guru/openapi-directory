import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Dealer extends SpeakeasyBase {
  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=data_source" })
  dataSource?: string;

  @Metadata({ data: "json, name=distance" })
  distance?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=inventory_url" })
  inventoryUrl?: string;

  @Metadata({ data: "json, name=latitude" })
  latitude?: string;

  @Metadata({ data: "json, name=location_ll" })
  locationLl?: string;

  @Metadata({ data: "json, name=longitude" })
  longitude?: string;

  @Metadata({ data: "json, name=seller_email" })
  sellerEmail?: string;

  @Metadata({ data: "json, name=seller_name" })
  sellerName?: string;

  @Metadata({ data: "json, name=seller_phone" })
  sellerPhone?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=street" })
  street?: string;

  @Metadata({ data: "json, name=zip" })
  zip?: string;
}
