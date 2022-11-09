import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Dimensions } from "./dimensions";
import { DownloadDetails } from "./downloaddetails";
import { User } from "./user";


export class HistoricalDownload extends SpeakeasyBase {
  @Metadata({ data: "json, name=agreement_name" })
  agreementName?: string;

  @Metadata({ data: "json, name=asset_type" })
  assetType?: string;

  @Metadata({ data: "json, name=date_downloaded" })
  dateDownloaded?: Date;

  @Metadata({ data: "json, name=dimensions" })
  dimensions?: Dimensions;

  @Metadata({ data: "json, name=download_details" })
  downloadDetails?: DownloadDetails;

  @Metadata({ data: "json, name=download_source" })
  downloadSource?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=product_id" })
  productId?: number;

  @Metadata({ data: "json, name=product_type" })
  productType?: string;

  @Metadata({ data: "json, name=size_name" })
  sizeName?: string;

  @Metadata({ data: "json, name=thumb_uri" })
  thumbUri?: string;

  @Metadata({ data: "json, name=user" })
  user?: User;
}
