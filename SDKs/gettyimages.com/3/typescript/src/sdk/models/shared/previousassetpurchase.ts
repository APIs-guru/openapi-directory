import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PreviousAssetPurchase extends SpeakeasyBase {
  @Metadata({ data: "json, name=asset_id" })
  assetId?: string;

  @Metadata({ data: "json, name=asset_type" })
  assetType?: string;

  @Metadata({ data: "json, name=date_purchased" })
  datePurchased?: Date;

  @Metadata({ data: "json, name=download_uri" })
  downloadUri?: string;

  @Metadata({ data: "json, name=file_size_in_bytes" })
  fileSizeInBytes?: string;

  @Metadata({ data: "json, name=license_model" })
  licenseModel?: string;

  @Metadata({ data: "json, name=order_id" })
  orderId?: string;

  @Metadata({ data: "json, name=purchased_by" })
  purchasedBy?: string;

  @Metadata({ data: "json, name=size_name" })
  sizeName?: string;

  @Metadata({ data: "json, name=thumb_uri" })
  thumbUri?: string;
}
