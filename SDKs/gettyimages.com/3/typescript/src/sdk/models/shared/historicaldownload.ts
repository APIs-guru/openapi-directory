import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dimensions } from "./dimensions";
import { DownloadDetails } from "./downloaddetails";
import { User } from "./user";



export class HistoricalDownload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agreement_name" })
  agreementName?: string;

  @SpeakeasyMetadata({ data: "json, name=asset_type" })
  assetType?: string;

  @SpeakeasyMetadata({ data: "json, name=date_downloaded" })
  dateDownloaded?: Date;

  @SpeakeasyMetadata({ data: "json, name=dimensions" })
  dimensions?: Dimensions;

  @SpeakeasyMetadata({ data: "json, name=download_details" })
  downloadDetails?: DownloadDetails;

  @SpeakeasyMetadata({ data: "json, name=download_source" })
  downloadSource?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=product_id" })
  productId?: number;

  @SpeakeasyMetadata({ data: "json, name=product_type" })
  productType?: string;

  @SpeakeasyMetadata({ data: "json, name=size_name" })
  sizeName?: string;

  @SpeakeasyMetadata({ data: "json, name=thumb_uri" })
  thumbUri?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: User;
}
