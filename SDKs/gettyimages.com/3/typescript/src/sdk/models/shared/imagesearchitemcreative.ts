import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AllowedUse } from "./alloweduse";
import { ImageSearchItemDisplaySize } from "./imagesearchitemdisplaysize";
import { Keyword } from "./keyword";
import { Download } from "./download";
import { MaxDimensions } from "./maxdimensions";
import { ReferralDestination } from "./referraldestination";


export class ImageSearchItemCreative extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowed_use" })
  allowedUse?: AllowedUse;

  @Metadata({ data: "json, name=alternative_ids" })
  alternativeIds?: Map<string, string>;

  @Metadata({ data: "json, name=artist" })
  artist?: string;

  @Metadata({ data: "json, name=asset_family" })
  assetFamily?: string;

  @Metadata({ data: "json, name=call_for_image" })
  callForImage?: boolean;

  @Metadata({ data: "json, name=caption" })
  caption?: string;

  @Metadata({ data: "json, name=collection_code" })
  collectionCode?: string;

  @Metadata({ data: "json, name=collection_id" })
  collectionId?: number;

  @Metadata({ data: "json, name=collection_name" })
  collectionName?: string;

  @Metadata({ data: "json, name=color_type" })
  colorType?: string;

  @Metadata({ data: "json, name=copyright" })
  copyright?: string;

  @Metadata({ data: "json, name=date_camera_shot" })
  dateCameraShot?: Date;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=display_sizes", elemType: shared.ImageSearchItemDisplaySize })
  displaySizes?: ImageSearchItemDisplaySize[];

  @Metadata({ data: "json, name=download_product" })
  downloadProduct?: string;

  @Metadata({ data: "json, name=graphical_style" })
  graphicalStyle?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=keywords", elemType: shared.Keyword })
  keywords?: Keyword[];

  @Metadata({ data: "json, name=largest_downloads", elemType: shared.Download })
  largestDownloads?: Download[];

  @Metadata({ data: "json, name=license_model" })
  licenseModel?: string;

  @Metadata({ data: "json, name=max_dimensions" })
  maxDimensions?: MaxDimensions;

  @Metadata({ data: "json, name=orientation" })
  orientation?: string;

  @Metadata({ data: "json, name=quality_rank" })
  qualityRank?: number;

  @Metadata({ data: "json, name=referral_destinations", elemType: shared.ReferralDestination })
  referralDestinations?: ReferralDestination[];

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=uri_oembed" })
  uriOembed?: string;
}
