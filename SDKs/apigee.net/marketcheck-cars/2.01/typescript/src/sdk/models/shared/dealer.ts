import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Dealer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=data_source" })
  dataSource?: string;

  @SpeakeasyMetadata({ data: "json, name=distance" })
  distance?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=inventory_url" })
  inventoryUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: string;

  @SpeakeasyMetadata({ data: "json, name=location_ll" })
  locationLl?: string;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: string;

  @SpeakeasyMetadata({ data: "json, name=seller_email" })
  sellerEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=seller_name" })
  sellerName?: string;

  @SpeakeasyMetadata({ data: "json, name=seller_phone" })
  sellerPhone?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=street" })
  street?: string;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip?: string;
}
