import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PreviousAssetPurchase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asset_id" })
  assetId?: string;

  @SpeakeasyMetadata({ data: "json, name=asset_type" })
  assetType?: string;

  @SpeakeasyMetadata({ data: "json, name=date_purchased" })
  datePurchased?: Date;

  @SpeakeasyMetadata({ data: "json, name=download_uri" })
  downloadUri?: string;

  @SpeakeasyMetadata({ data: "json, name=file_size_in_bytes" })
  fileSizeInBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=license_model" })
  licenseModel?: string;

  @SpeakeasyMetadata({ data: "json, name=order_id" })
  orderId?: string;

  @SpeakeasyMetadata({ data: "json, name=purchased_by" })
  purchasedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=size_name" })
  sizeName?: string;

  @SpeakeasyMetadata({ data: "json, name=thumb_uri" })
  thumbUri?: string;
}
